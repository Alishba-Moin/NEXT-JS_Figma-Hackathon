import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string | number;
  large?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, large = false }) => {
  return (
    <div
      className={`flex flex-col items-start gap-4 ${
        large ? 'h-[400px]' : 'h-[400px]'
      } relative`}
    >
      {/* Image Section */}
      <div
 className={`relative ${large ? 'md:h-[300px]' : 'md:h-[300px]'} w-full bg-gray-100 sm:hidden md:block`}
  >
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      {/* Text Section */}
      <div className="flex flex-col items-start gap-2 sm:hidden md:block">
        <h4 className="font-clash text-[20px] font-normal text-[#2A254B] leading-[140%]">
          {title}
        </h4>
        <p className="font-satoshi text-[18px] font-normal text-[#2A254B] leading-[150%]">
          £{price}
        </p>
      </div>
    </div>
  );
};

const ListingsTwo = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8 bg-white">
      {/* Section Title */}
      <h2 className="font-clash text-[32px] font-normal text-[#2A254B] leading-[140%] mb-6">
        Our Popular Products
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-8">
        {/* Large Card */}
        <div className="col-span-2">
          <ProductCard
            imageSrc="/Large.png"
            title="The Poplar Suede Sofa"
            price="980"
            large
          />
        </div>

        {/* Small Cards */}
        <div className="col-span-1">
          <ProductCard imageSrc="/img1.png" title="The Dandy Chair" price="250" />
        </div>
        <div className="col-span-1">
          <ProductCard imageSrc="/chair.png" title="The Dark Chair" price="250" />
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8 flex justify-center">
        <Button className="px-8 py-4 bg-gray-100 font-satoshi text-[16px] font-normal text-[#2A254B]">
          View collection
        </Button>
      </div>
    </div>
  );
};

export default ListingsTwo;
