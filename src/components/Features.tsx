// components/Features.js
import { BsTruck } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";
import { RiRecycleFill } from "react-icons/ri";

export default function Features() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-10 px-4 md:px-16">
      {/* Section Heading */}
      <h3 className="text-2xl font-normal font-[\'Clash Display\'] text-[#2A254B] text-center mb-10">
        What makes our brand different
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature Block 1 */}
        <div className="flex flex-col items-start gap-4">
          <BsTruck className="w-6 h-6 text-[#2A254B]" />
          <h4 className="text-lg font-normal font-[\'Clash Display\'] text-[#2A254B]">
            Next day as standard
          </h4>
          <p className="text-sm font-normal font-[\'Satoshi\'] text-[#2A254B] leading-6">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Feature Block 2 */}
        <div className="flex flex-col items-start gap-4">
          <FaHandHoldingHeart className="w-6 h-6 text-[#2A254B]" />
          <h4 className="text-lg font-normal font-[\'Clash Display\'] text-[#2A254B]">
            Made by true artisans
          </h4>
          <p className="text-sm font-normal font-[\'Satoshi\'] text-[#2A254B] leading-6">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        {/* Feature Block 3 */}
        <div className="flex flex-col items-start gap-4">
          <AiOutlineTag className="w-6 h-6 text-[#2A254B]" />
          <h4 className="text-lg font-normal font-[\'Clash Display\'] text-[#2A254B]">
            Unbeatable prices
          </h4>
          <p className="text-sm font-normal font-[\'Satoshi\'] text-[#2A254B] leading-6">
            For our materials and quality, you won’t find better prices anywhere.
          </p>
        </div>

        {/* Feature Block 4 */}
        <div className="flex flex-col items-start gap-4">
          <RiRecycleFill className="w-6 h-6 text-[#2A254B]" />
          <h4 className="text-lg font-normal font-[\'Clash Display\'] text-[#2A254B]">
            Recycled packaging
          </h4>
          <p className="text-sm font-normal font-[\'Satoshi\'] text-[#2A254B] leading-6">
            We use 100% recycled packaging to ensure our footprint is manageable.
          </p>
        </div>
      </div>
    </section>
  );
}
