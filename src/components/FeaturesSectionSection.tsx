'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUserTie, faCross } from '@fortawesome/free-solid-svg-icons';

interface FeaturesProps {
  icon: any; // Use the appropriate type for FontAwesomeIcon
  title: string;
  description: string;
}

const FeaturesTile: React.FC<FeaturesProps> = ({ icon, title, description }) => (
  <div className="flex flex-col h-96 items-center p-4 mb-8 md:mb-0">
    <FontAwesomeIcon 
      icon={icon} 
      className="text-cyan-900 text-6xl mt-8 mb-16" 
    />
    <h3 className="tracking-tighter text-xl text-center font-semibold mb-2 text-white">{title}</h3>
    <p className="tracking-tighter text-center text-white">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features: FeaturesProps[] = [
    {
      icon: faTruck,
      title: 'Direct Sourcing from Manufacturers',
      description: "Jacob's Supply receives products by the semi-load directly from building manufacturers and dealers across the country, ensuring they have high-quality materials at competitive prices.",
    },
    {
      icon: faUserTie,
      title: 'Personalized Customer Service',
      description: 'A knowledgeable and helpful team is available to assist customers, providing guidance and support to ensure a positive shopping experience, whether or not a purchase is made.',
    },
    {
      icon: faCross,
      title: 'Christian Values and Community Focus',
      description: "Jacob's Supply is driven by a commitment to Christian values, aiming to glorify God in all business practices and support the community through affordable pricing and ethical standards.",
    },
  ];

  return (
    <section className="py-12 mt-9 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeaturesTile key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;