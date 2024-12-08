import { FaTruck } from 'react-icons/fa';

export default function Banner() {
  return (
    <div className="relative w-full h-[41px] bg-[#2A254B] flex items-center justify-center">
      {/* Banner Content */}
      <div className="absolute flex items-center gap-2 w-full max-w-[407px] px-4 sm:w-auto sm:px-0 left-1/2 transform -translate-x-1/2 top-3">
        {/* Delivery Icon */}
        <FaTruck size={16} color="white" />

        {/* Delivery Text */}
        <p className="text-white text-xs sm:text-sm md:text-base">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      </div>

      {/* Close Button */}
      <button className="absolute top-2 right-4 text-white text-lg sm:text-xl md:text-2xl">
        X
      </button>
    </div>
  );
}
