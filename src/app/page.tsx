'use client';

// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import Testimonials from '../components/Testimonials';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSectionSection';
import TheWordOfGod from '@/components/TheWordOfGod';
import Banner from '@/components/Banner';

export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MainSection />
      <TheWordOfGod />
      <BenefitsSection />
      <Banner />
      <FeaturesSection />
      <Testimonials />
    </div>
  );
}
