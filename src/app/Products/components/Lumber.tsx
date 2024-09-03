import React from 'react';
import Image from 'next/image';

interface LumberTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const LumberTile: React.FC<LumberTileProps> = ({ imageSrc, title, description }) => (
  <div className="flex text-white flex-col items-center p-4 mb-8 md:mb-0 rounded-lg shadow-md">
    <div className="w-full h-64 mb-4 relative">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-center text-white">{description}</p>
  </div>
);

const LumberSection: React.FC = () => {
  const lumberOptions: LumberTileProps[] = [
    {
      imageSrc: '/assets/images/lumber1.webp',
      title: 'LVL Beams',
      description: 'Engineered Laminated Veneer Lumber for superior strength and stability.',
    },
    {
      imageSrc: '/assets/images/lumber1.webp',
      title: 'I-Joists',
      description: 'Lightweight, strong, and perfect for floor and roof systems.',
    },
    {
      imageSrc: '/assets/images/lumber1.webp',
      title: 'Specialty Lumber',
      description: 'Custom and specialty lumber options for unique projects.',
    },
  ];

  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Lumber Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lumberOptions.map((option, index) => (
            <LumberTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center bg-yellow-100 border-yellow-400 border-2 p-4 rounded-lg">
          <p className="text-lg font-semibold text-yellow-800">
            We are currently out of dimensional lumber. We do have small lots of LVL's and I-Joists available! Let us know how we can best serve you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LumberSection;
