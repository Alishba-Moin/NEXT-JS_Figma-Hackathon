// components/HeroSection.js
export default function HeroSection() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-[704px] bg-white">
      {/* Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full bg-[#2A254B] p-8">
        {/* Left Content */}
        <div className="max-w-[513px] space-y-8">
          {/* Heading */}
          <h2 className="text-[32px] font-normal leading-[140%] text-white font-clash-display sm:text-[28px] md:text-[32px]">
            The furniture brand for the future, with timeless designs
          </h2>

          {/* Paragraph */}
          <p className="text-[18px] font-normal leading-[150%] text-white font-satoshi sm:text-[16px] md:text-[18px]">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts,
            tasteful colors, and a beautiful way to display things digitally using modern web technologies.
          </p>

          {/* Button */}
          <div>
            <button className="px-8 py-4 text-white bg-opacity-15 bg-white font-satoshi text-[16px] leading-[150%] sm:text-[14px] md:text-[16px]">
             View Collection
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-[520px] h-full bg-cover bg-center lg:w-[520px] sm:w-full sm:h-[300px] md:h-[400px]"
          style={{ backgroundImage: "url('/Right-Image.png')" }}
        ></div>
      </div>
    </div>
  );
}

