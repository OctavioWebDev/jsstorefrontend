import React from 'react';
import Image from 'next/image';

interface FlooringTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FlooringTile: React.FC<FlooringTileProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col text-white items-center p-4 mb-8 md:mb-0 rounded-lg shadow-md">
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

const FlooringSection: React.FC = () => {
  const flooringOptions: FlooringTileProps[] = [
    {
      imageSrc: '/images/hardwood-flooring.jpg',
      title: 'Hardwood Flooring',
      description: 'Choose from engineered, solid, and unfinished hardwood options for a classic, timeless look.',
    },
    {
      imageSrc: '/images/vinyl-laminate-flooring.jpg',
      title: 'Vinyl & Laminate',
      description: 'Durable and affordable options including Cali Vinyl and COREtec for any room in your home.',
    },
    {
      imageSrc: '/images/tile-accessories.jpg',
      title: 'Tile & Accessories',
      description: 'Explore our selection of tile flooring and various accessories to complete your flooring project.',
    },
  ];

  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Flooring Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flooringOptions.map((option, index) => (
            <FlooringTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            We have many flooring options that are perfect for your space. We currently have laminate, 
            vinyl, engineered, solid hardwood, unfinished hardwood, tile and other flooring accessories available.
          </p>
          <p className="text-lg mb-4">
            We stock a broad selection of buyouts and closeouts discounted at 30% - 50% off the big box stores!
          </p>
          <p className="text-xl font-semibold mb-4">
            Stop by and checkout our new showroom filled with Cali Vinyl and COREtec!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlooringSection;
