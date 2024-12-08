import { Button } from '@/components/ui/button';
import ProductCard from './productCard';
import Navbar from './header';
import Link from 'next/link'
const products = [
  { title: 'Product 1', price: '£250', imageUrl: '/img1.png' },
  { title: 'Product 2', price: '£180', imageUrl: '/img2.png' },
  { title: 'Product 3', price: '£120', imageUrl: '/img3.png' },
  { title: 'Product 4', price: '£350', imageUrl: '/img4.png' },
  { title: 'Product 5', price: '£400', imageUrl: '/pro1.png' },
  { title: 'Product 6', price: '£300', imageUrl: '/pro2.png' },
  { title: 'Product 7', price: '£280', imageUrl: '/pro3.png' },
  { title: 'Product 8', price: '£200', imageUrl: '/pro4.png' },
];

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <div className="space-y-12 py-10">
        {/* Upper Section: 4 Cards */}
        <div className="flex justify-center gap-8 flex-wrap">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={index} title={product.title} price={product.price} imageUrl={product.imageUrl} />
          ))}
        </div>

        {/* Middle Section: Different Image Layout */}
        <div className="flex justify-center gap-8 flex-wrap">
          {products.slice(4, 8).map((product, index) => (
            <ProductCard key={index} title={product.title} price={product.price} imageUrl={product.imageUrl} />
          ))}
        </div>

        {/* Lower Section: 4 Cards */}
        <div className="flex justify-center gap-8 flex-wrap">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={index} title={product.title} price={product.price} imageUrl={product.imageUrl} />
          ))}
        </div>
       <div className="flex justify-center mt-12">
      <Link href="/ProductListing">
        <button className="px-8 py-3 bg-gray-200 text-[#2A254B] font-satoshi text-lg rounded-lg">
          View product details
        </button>
      </Link>
    </div>
        </div>
      </>
  );
}
