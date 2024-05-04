'use client';

// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import Testimonials from '../components/Testimonials';

export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <MainSection />
      <Testimonials />
      
    </div>
  );
}
