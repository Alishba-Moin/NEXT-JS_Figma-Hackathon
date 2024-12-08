import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default function Navbar() {
  return (
    <nav className="w-full h-[80px] bg-white relative">
      {/* Avion Brand Name */}
      <div className="absolute top-[25px] left-4 sm:left-[80px] text-[#22202E] text-[24px] font-[400] font-clash-display">
        <Link href="/">Avion</Link>
      </div>

      {/* Main Links - Desktop View */}
      <div className="hidden lg:flex absolute top-[29px] left-[297px] gap-[44px] text-[#726E8D] text-[16px] font-[400]">
        <Link href="/plant-pots">Plant pots</Link>
        <Link href="/ceramics">Ceramics</Link>
        <Link href="/tables">Tables</Link>
        <Link href="/chairs">Chairs</Link>
        <Link href="/crockery">Crockery</Link>
        <Link href="/tableware">Tableware</Link>
        <Link href="/cutlery">Cutlery</Link>
      </div>

      {/* Side Actions (Icons for Search, Cart, Avatar) - Desktop View */}
      <div className="hidden lg:flex absolute top-[30px] right-10 gap-[16px]">
        {/* Search Icon */}
        <div className="w-[16px] h-[16px] bg-[#2A254B] flex items-center justify-center rounded-full">
          <IoSearch size={16} color="#2A254B" />
        </div>

        {/* Shopping Cart Icon */}
        <div className="w-[16px] h-[16px] bg-[#2A254B] flex items-center justify-center rounded-full">
          <MdOutlineShoppingCart size={16} color="#2A254B" />
        </div>

        {/* User Avatar Icon */}
        <div className="w-[16px] h-[16px] bg-[#2A254B] flex items-center justify-center rounded-full">
          <CgProfile size={16} color="#2A254B" />
        </div>
      </div>

      {/* Mobile Layout (Hamburger Menu & Icons) */}
      <div className="lg:hidden absolute top-2 right-4 flex items-center gap-4">
        {/* Mobile Icons */}
        <IoSearch size={20} color="#2A254B" />
        <MdOutlineShoppingCart size={20} color="#2A254B" />
        <CgProfile size={20} color="#2A254B" />
      </div>

      {/* Hamburger Menu - Mobile View */}
      <div className="lg:hidden absolute top-[29px] left-4 flex items-center gap-4">
        <button className="text-[#2A254B] text-2xl">☰</button> {/* Replace with hamburger icon */}
      </div>

      {/* Mobile Menu - When Hamburger is Clicked (Toggleable) */}
      {/* Example: Mobile Menu dropdown could go here */}
      <div className="lg:hidden absolute top-[80px] left-4 w-full bg-white shadow-lg flex flex-col items-start p-4">
        <Link href="/plant-pots">Plant pots</Link>
        <Link href="/ceramics">Ceramics</Link>
        <Link href="/tables">Tables</Link>
        <Link href="/chairs">Chairs</Link>
        <Link href="/crockery">Crockery</Link>
        <Link href="/tableware">Tableware</Link>
        <Link href="/cutlery">Cutlery</Link>
      </div>
    </nav>
  );
}
