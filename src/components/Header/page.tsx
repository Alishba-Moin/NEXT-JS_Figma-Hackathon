"use client";


import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-10 lg:w-full mx-auto">
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          {/* Left: Search icon on large screens */}
          <div className="flex items-center gap-3 lg:flex-1">
            <div className="lg:block hidden">
              <IoSearch className="text-xl" />
            </div>
          </div>

          {/* Avion Title */}
          <h1 className="text-[#22202E] text-2xl font-semibold text-left lg:text-center">
            Avion
          </h1>

          {/* Right: Cart and Profile icons for large screens */}
          <div className="hidden lg:flex gap-3 text-xl lg:flex-1 justify-end">
          <Link href="/ShoppingBaskets">
        <MdOutlineShoppingCart />
      </Link>
      
      {/* Link to the Profile Page */}
      <Link href="/About">
        <CgProfile />
      </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger>
              <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer lg:hidden flex flex-col gap-1 font-light"
              >
                <span className="block w-6 h-1 bg-black"></span>
                <span className="block w-6 h-1 bg-black"></span>
                <span className="block w-6 h-1 bg-black"></span>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 text-lg text-[#726E8D]">
                <Link href="/" className="hover:text-[#5a526c]">
                  Plant pots
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  Ceramics
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  Tables
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  Chairs
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  Crockery
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  Tableware
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  Cutlery
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Plant pots
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Ceramics
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tables
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Chairs
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Crockery
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tableware
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Cutlery
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;