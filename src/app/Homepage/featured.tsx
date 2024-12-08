import { Button } from "@/components/ui/button";

export default function FeaturesTwo() {
  return (
    <div className="relative w-full h-auto md:h-[603px]">
      {/* Features Section */}
      <div className="w-full h-full flex flex-col md:flex-row bg-white">
        
        {/* Left Content */}
        <div className="relative w-full md:w-[720px] h-full bg-white p-4 flex flex-col justify-center md:items-start items-center">
          {/* Top Content */}
          <div className="flex flex-col gap-6 md:gap-8 mt-[72px] md:mt-[72px] mx-auto w-full max-w-[536px]">
            {/* Title */}
            <h2 className="text-[#2A254B] text-2xl md:text-3xl font-normal leading-tight text-center md:text-left">
              From a studio in London to a global brand with over 400 outlets
            </h2>

            {/* Description */}
            <p className="text-[#505977] text-sm md:text-base font-normal leading-relaxed text-center md:text-left">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
            </p>

            {/* Button */}
            <Button className="w-[150px] h-[56px] bg-[#F9F9F9] text-[#2A254B] font-medium text-lg px-8 py-4 mt-[70px] mx-auto md:mx-0">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="relative w-full md:w-[720px] h-[300px] md:h-full bg-cover bg-no-repeat bg-center bg-[url('/Image.png')]"></div>
      </div>
    </div>
  );
}
