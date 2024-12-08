import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Image from "next/image";
import Features from "../../components/Features";
import SignUpSection from "../../components/Signup";
import styles from "./ProductDetails.module.css"; // Importing CSS Module if required

const ProductDetails = () => {
  return (
    <div className="relative flex flex-wrap w-full bg-white">
      <Navbar />

      {/* Image Left */}
      <div className="w-full md:w-[721px] h-[759px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/Image-Left.png)' }}></div>

      {/* Wrapper */}
      <div className="relative w-full md:w-[602px] bg-white p-8 md:p-16">
        {/* Product Name and Price */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#2A254B]">The Dandy Chair</h2>
          <p className="text-2xl font-medium text-[#12131A]">£250</p>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-[#2A254B]">Description</h3>
          <p className="text-base text-[#505977]">
            A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
          </p>
        </div>

        {/* Dimensions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#2A254B]">Dimensions</h3>
          <div className="flex flex-wrap gap-16 mt-4">
            <div className="flex flex-col items-start">
              <span className="text-sm text-[#2A254B]">Height</span>
              <span className="text-base text-[#505977]">110cm</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm text-[#2A254B]">Width</span>
              <span className="text-base text-[#505977]">75cm</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm text-[#2A254B]">Depth</span>
              <span className="text-base text-[#505977]">50cm</span>
            </div>
          </div>
        </div>

        {/* Amount/Quantity */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#2A254B]">Amount</h3>
          <div className="flex items-center gap-4 mt-4">
            <button className="text-2xl text-[#CAC6DA]">-</button>
            <span className="text-xl text-[#2A254B]">1</span>
            <button className="text-2xl text-[#CAC6DA]">+</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <Button className="bg-[#2A254B] text-white py-2 px-6 rounded-md text-lg">
            Add to Cart
          </Button>
        </div>
      </div>

      {/* might like section */}
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Title */}
        <div className="text-[#2A254B] font-clash font-normal text-2xl lg:text-4xl mt-8">
          You might also like
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
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
              <div className="relative w-full h-[450px]">
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
      <section>
        <Features />
      </section>
      <section>
        <SignUpSection />
      </section>
    </div>
  );
};

export default ProductDetails;

