import { Button } from '@/components/ui/button';
import React from 'react';
import Features from '../../components/Features';
import SignUpSection from '../../components/Signup';
import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/image'
export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      {/* Page Header */}
      <header className="relative w-full h-[350px] bg-white px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Brand Description - Left side */}
        <div className="text-[#2A254B] font-normal text-[36px] leading-[50px] max-w-[704px] sm:text-[24px] sm:leading-[36px] sm:max-w-[90%] sm:text-center sm:mb-4 sm:px-4">
          A brand built on the love of craftsmanship,
          <br />
          quality and outstanding customer service
        </div>

        {/* Button - Right side */}
        <Link href="/products" passHref>
          <Button className="text-gray-950 px-[32px] py-[16px] rounded-md text-[16px] leading-[24px] sm:px-[24px] sm:py-[12px] sm:w-full">
            View Our Products
          </Button>
        </Link>
      </header>

     {/* Story Section */}
     <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="bg-custom-purple w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img
            src="/images/About main.png"
            alt="About main"
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <Image
          src=""
          alt="Service"
          className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
        </div>
      </div>

      <section>
        <Features />
      </section>
      <section>
        <SignUpSection />
      </section>
    </div>
  );
}
