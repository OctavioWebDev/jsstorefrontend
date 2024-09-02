'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faThLarge, faHandshake } from '@fortawesome/free-solid-svg-icons';

interface BenefitProps {
  icon: any; // Use the appropriate type for FontAwesomeIcon
  title: string;
  description: string;
}

const BenefitTile: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex flex-col h-96 items-center  p-4 mb-8 md:mb-0">
    <FontAwesomeIcon 
      icon={icon} 
      className="text-cyan-900 text-6xl mt-8 mb-16" 
    />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-center text-white">{description}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  const benefits: BenefitProps[] = [
    {
      icon: faDollarSign,
      title: 'Significant Cost Savings',
      description: 'Customers can save 30-50% compared to big box store prices, making high-quality building materials affordable for everyone, from homeowners to professional contractors.',
    },
    {
      icon: faThLarge,
      title: 'Wide Selection of Materials',
      description: "Jacob's Supply offers a diverse range of new closeout and overstock items sourced directly from manufacturers and dealers nationwide, ensuring a wide variety of products available for various construction needs.",
    },
    {
      icon: faHandshake,
      title: 'Trust and Reliability',
      description: "With over 10 years of experience in the industry, Jacob's Supply has built a strong reputation for quality and customer service, providing customers with a trustworthy source for building materials at unbeatable prices.",
    },
  ];

  return (
    <section className="py-12 mt-8 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitTile key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
