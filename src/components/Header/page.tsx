"use client";

import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../utils/fetchCategories"; // Ensure this path is correct
import { useCart } from "../../../context/Cart_Context";

import SearchBar from "../SearchBar";

interface Category {
  _id: string;
  name: string;
}

const Header = () => {
  const { state } = useCart();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch categories when the component mounts
  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    getCategories();
  }, []);

  
  return (
    <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-10 lg:w-full mx-auto">
      {/* Top Bar */}
      <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center sticky top-0 md:static">
        {/* Left: Search icon */}
        <div className="flex items-center gap-3 lg:flex-1">
          <div className="relative">
          
        <SearchBar /> 
          </div>
        </div>

        {/* Center: Logo */}
        <Link href="/">
          <h1 className="hidden lg:flex text-[#22202E] text-2xl font-semibold lg:text-center">
            Avion
          </h1>
        </Link>

        {/* Right: Cart and Profile */}
        <div className="flex gap-3 text-xl lg:flex-1 justify-end relative">
          {/* Shopping Cart Icon */}
          <Link href="/ShoppingBaskets" className="relative">
            <MdOutlineShoppingCart size={24} />
            <div
          className={`bg-slate-900 text-center h-5 rounded-full text-white text-xs absolute -top-2 left-4 flex items-center justify-center ${
            state.items.length > 9 ? 'w-6 px-1' : 'w-5'
          }`}
        >
          {state.items.length}
        </div>
          </Link>

          {/* Profile Icon */}
          <Link href="/profile">
            <CgProfile size={24}/>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col gap-1 font-light cursor-pointer mt-2 justify-end text-end"
      >
        <span className="block w-6 h-1 bg-black"></span>
        <span className="block w-6 h-1 bg-black"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
          <nav className="flex flex-col gap-4 text-lg text-[#726E8D]">
          <Link
              href="/"
              className="hover:text-[#5a526c]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Link for All Products */}
            <Link
              href="/AllProducts"
              className="hover:text-[#5a526c]"
              onClick={() => setIsOpen(false)}
            >
              All Products
            </Link>

            {/* Dynamically render category links */}
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/Category/${category._id.toString()}`} // Using [id] instead of slug
                className="hover:text-[#5a526c]"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}

            {/* Link for About */}
            <Link
              href="/About"
              className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
            >
              About
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D] mt-4">
        {/* Link for All Products */}
        <Link
          href="/AllProducts"
          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
        >
          All Products
        </Link>

        {/* Dynamically render category links */}
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/Category/${category._id.toString()}`} // Using [id] instead of slug
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            {category.name}
          </Link>
        ))}

        {/* Link for About */}
        <Link
          href="/About"
          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
