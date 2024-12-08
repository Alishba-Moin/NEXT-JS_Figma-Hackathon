import { Button } from "@/components/ui/button";

export default function SignUpSection() {
  return (
    <div className="relative w-full h-[481px] bg-[#F9F9F9] flex justify-center items-center">
      {/* Container */}
      <div className="w-[90%] md:w-[1273px] h-[364px] bg-white flex flex-col items-center justify-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Heading */}
          <h1 className="w-[100%] md:w-[571px] text-2xl md:text-4xl font-normal text-[#2A254B]">
            Join the club and get the benefits
          </h1>

          {/* Subheading */}
          <p className="w-[90%] md:w-[470px] text-base md:text-lg font-normal text-[#2A254B] opacity-90">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more
          </p>

          {/* Input Section */}
          <div className="w-[90%] md:w-[472px] h-[56px] flex items-center gap-4 mt-6">
            {/* Text Input */}
            <div className="w-full md:w-[354px] h-[56px] bg-[#F9F9F9] border box-border flex items-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full h-full bg-[#F9F9F9] text-[#2A254B] opacity-20 text-base pl-4"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-[100%] md:w-[118px] h-[56px] bg-[#2A254B] flex items-center justify-center px-8 text-white text-base md:text-lg">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
