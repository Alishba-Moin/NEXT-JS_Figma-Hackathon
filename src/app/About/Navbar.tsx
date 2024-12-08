import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Banner from '../../components/Banner';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <Banner />
      
      {/* Top Bar */}
      <div className="flex justify-between items-center py-4 px-8">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-[#22202E]">
          <Link href="/">Avion</Link>
        </div>

        {/* Right Side Links for desktop */}
        <div className="hidden ml-auto lg:flex gap-8">
          <Link href="/About" className="text-[#726E8D] text-sm">About Us</Link>
          <Link href="/contact" className="text-[#726E8D] text-sm">Contact</Link>
          <Link href="/blog" className="text-[#726E8D] text-sm">Blog</Link>
        </div>

        {/* Right: Cart, Profile, Search icons for large screens */}
        <div className="hidden lg:flex gap-3 text-xl">
          <IoSearch className="text-xl cursor-pointer" />
          <MdOutlineShoppingCart className="cursor-pointer" />
          <CgProfile className="cursor-pointer" />
        </div>
        
        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger>
            <div className="lg:hidden cursor-pointer flex flex-col gap-1">
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
              <Link href="/" className="hover:text-[#5a526c]">Plant pots</Link>
              <Link href="/" className="hover:text-[#5a526c]">Ceramics</Link>
              <Link href="/" className="hover:text-[#5a526c]">Tables</Link>
              <Link href="/" className="hover:text-[#5a526c]">Chairs</Link>
              <Link href="/" className="hover:text-[#5a526c]">Crockery</Link>
              <Link href="/" className="hover:text-[#5a526c]">Tableware</Link>
              <Link href="/" className="hover:text-[#5a526c]">Cutlery</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation links */}
      <nav className="hidden lg:flex w-full justify-center items-center gap-4 text-[#726E8D]">
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
  );
}
