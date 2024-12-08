import Image from 'next/image';


interface ProductCardProps {
    imageUrl: string; // Explicitly define the type as string
    title: string;
    price: string | number; // Price can be a string or number
  }

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className="relative w-full max-w-[305px] h-[462px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-[75%] bg-gray-200">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h4 className="text-xl font-semibold text-[#2A254B]">{title}</h4>
        <p className="text-lg font-medium text-[#2A254B]">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
