import Header from '@/components/Header/page';
import HeroSection from './Homepage/heroSection';
import Features from '../components/Features';
import Listings from './Homepage/listing1';
import ListingsTwo from './Homepage/listing2';
import SignUpSection from '../components/Signup';
import FeaturesTwo from './Homepage/featured';

export default function Home() {
  return (
 
    <div>
      <Header/>
      <HeroSection />
      <Features />
      <Listings />
      <ListingsTwo />
      <SignUpSection />
      <FeaturesTwo />
    </div>
  );
};

