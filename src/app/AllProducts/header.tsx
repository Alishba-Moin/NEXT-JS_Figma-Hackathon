import Header from "@/components/Header/page";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaCaretDown } from "react-icons/fa"; // Import React Icons

const Navbar = () => {
  return (
    <div>
      <Header/>
     {/* Navbar Section */}
<div className="flex justify-between items-center w-full h-16 bg-white px-6 shadow-md">
  {/* Left Section */}
  <div className="hidden md:flex items-center gap-4">
    <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-800">
      <span>Category</span>
      <FaCaretDown size={16} className="text-gray-800" />
    </button>

    <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-800">
      <span>Product type</span>
      <FaCaretDown size={16} className="text-gray-800" />
    </button>

    <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-800">
      <span>Price</span>
      <FaCaretDown size={16} className="text-gray-800" />
    </button>

    <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-800">
      <span>Brand</span>
      <FaCaretDown size={16} className="text-gray-800" />
    </button>
  </div>

  {/* Right Section */}
  <div className="hidden md:flex items-center gap-4">
    <span className="text-md text-gray-800">Sorting by:</span>
    <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-800">
      <span>Date added</span>
      <FaCaretDown size={16} className="text-gray-800" />
    </button>
  </div>

  {/* Mobile View Toggle */}
  <div className="flex md:hidden">
    <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-800">
      <span>Sorting</span>
      <FaCaretDown size={16} className="text-gray-800" />
    </button>
    <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-800">
      <span>Filter</span>
      <FaCaretDown size={16} className="text-gray-800" />
    </button>
  </div>
</div>

{/* All Products Section */}
<div
  className="relative w-full h-[209px] bg-cover bg-center sm:h-[150px]"
  style={{ backgroundImage: "url('/frame.png')" }}
></div>

    </div>
  );
};

export default Navbar;
