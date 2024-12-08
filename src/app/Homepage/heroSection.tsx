import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="relative w-full max-w-screen-xl mx-auto h-auto md:h-[604px] px-8 py-12">
        {/* Container */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full bg-[#2A254B]">
          {/* Left Content */}
          <div className="w-full lg:w-[60%] h-auto md:h-[580px] px-4 md:px-12 py-6 md:py-12 text-white flex flex-col justify-between">
            {/* Heading */}
            <h2 className="text-[28px] md:text-[32px] font-normal leading-[140%] text-white">
              The furniture brand for the future, with timeless designs
            </h2>

            <Button className="w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-8">
                View collection
              </Button>

            <div className="flex justify-center md:justify-start">
            <p className="mt-6 text-sm md:text-base">
              A new era in eco-friendly furniture with Avion, the French luxury retail brand
              <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
              <br /> using modern web technologies.
            </p>
            </div>
          </div>

         <!-- Right Image -->
  <div class="absolute top-0 left-[760px] w-[520px] h-[584px] bg-cover" style="background-image: url('/Right-Image.png');"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
