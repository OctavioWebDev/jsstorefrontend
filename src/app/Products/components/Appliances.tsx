import React from 'react';
import Image from 'next/image';

interface ApplianceTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ApplianceTile: React.FC<ApplianceTileProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center p-4 mb-8 md:mb-0 rounded-lg shadow-md">
    <div className="w-full h-48 mb-4 relative">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
    <p className="text-center text-white">{description}</p>
  </div>
);

const AppliancesSection: React.FC = () => {
  const appliances: ApplianceTileProps[] = [
    {
      imageSrc: '/assets/images/appliances1_480x480.webp',
      title: 'Washers & Dryers',
      description: 'High-efficiency washers and dryers from top brands like Samsung and Whirlpool.',
    },
    {
      imageSrc: '/assets/images/appliances2_480x480.webp',
      title: 'Refrigerators',
      description: 'Keep your food fresh with our selection of refrigerators from Frigidaire and Bosch.',
    },
    {
      imageSrc: '/assets/images/appliances3.webp',
      title: 'Ranges & Ovens',
      description: 'Cook up a storm with our ranges and ovens from Electrolux and Samsung.',
    },
    {
      imageSrc: '/assets/images/appliances4.webp',
      title: 'Dishwashers',
      description: 'Make cleanup a breeze with dishwashers from Bosch and Whirlpool.',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center mb-8">Our Appliances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {appliances.map((appliance, index) => (
            <ApplianceTile key={index} {...appliance} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-white mb-4">
            We have many appliances from Samsung, Electrolux, Frigidaire, Whirlpool and Bosch in stock! 
            We carry both new models and some with slight scratches or dents. We have washers, dryers, 
            freezers, ranges, refrigerators, dishwashers, cooktops, water heaters, and ovens.
          </p>
          <p className="text-xl text-white font-semibold">
            Come in and check out our current inventory!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppliancesSection;
