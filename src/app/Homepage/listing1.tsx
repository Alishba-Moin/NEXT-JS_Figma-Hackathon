import Image from 'next/image';

export default function Listings() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Title */}
      <div className="text-[#2A254B] font-clash font-normal text-2xl lg:text-4xl mt-8">
        New Ceramics
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* Product Card */}
        {[{
          image: '/img1.png',
          name: 'The Dandy Chair',
          price: '£250'
        }, {
          image: '/img2.png',
          name: 'Three Vases',
          price: '£250'
        }, {
          image: '/img3.png',
          name: 'Single Vase',
          price: '£250'
        }, {
          image: '/img4.png',
          name: 'Ceiling Lamp',
          price: '£250'
        }].map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white p-4 rounded-lg shadow-lg"
          >
            {/* Photo */}
            <div className="relative w-full h-[375px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>

            {/* Details */}
            <div className="mt-4 space-y-2">
              <h4 className="font-clash text-xl text-[#2A254B]">
                {product.name}
              </h4>
              <p className="font-satoshi text-lg text-[#2A254B]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-gray-200 text-[#2A254B] font-satoshi text-lg rounded-lg">
          View collection
        </button>
      </div>
    </div>
  );
}