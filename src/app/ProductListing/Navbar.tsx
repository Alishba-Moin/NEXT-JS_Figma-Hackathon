import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // ShadCN Sheet

export default function Navbar() {
  return (
    <nav className="w-full h-[80px] bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Brand Name */}
        <div className="text-xl font-semibold text-gray-900">
          <Link href="/">Avion</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 text-gray-600">
          <Link href="/plant-pots">Plant pots</Link>
          <Link href="/ceramics">Ceramics</Link>
          <Link href="/tables">Tables</Link>
          <Link href="/chairs">Chairs</Link>
          <Link href="/crockery">Crockery</Link>
          <Link href="/tableware">Tableware</Link>
          <Link href="/cutlery">Cutlery</Link>
        </div>

        {/* Actions (Search, Cart, Profile) */}
        <div className="hidden lg:flex gap-6 items-center">
          <IoSearch className="text-gray-700" size={20} />
          <MdOutlineShoppingCart className="text-gray-700" size={20} />
          <CgProfile className="text-gray-700" size={20} />
        </div>

        {/* Mobile Menu Trigger - Checkbox & Label */}
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label htmlFor="menu-toggle" className="lg:hidden text-gray-700 text-2xl px-2 py-1 cursor-pointer">
          ☰
        </label>

        {/* Mobile Menu (Hidden by default, visible when checkbox is checked) */}
        <div className="peer-checked:block hidden absolute top-[80px] left-0 w-full bg-white shadow-lg p-4">
          <nav className="flex flex-col gap-4">
            <Link href="/plant-pots">Plant pots</Link>
            <Link href="/ceramics">Ceramics</Link>
            <Link href="/tables">Tables</Link>
            <Link href="/chairs">Chairs</Link>
            <Link href="/crockery">Crockery</Link>
            <Link href="/tableware">Tableware</Link>
            <Link href="/cutlery">Cutlery</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}

