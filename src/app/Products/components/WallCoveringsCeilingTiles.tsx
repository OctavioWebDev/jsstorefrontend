import React from 'react';
import Image from 'next/image';

interface TileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const WallCeilingTile: React.FC<TileProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col text-white items-center p-4 mb-8 md:mb-0rounded-lg shadow-md">
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

const WallCeilingSection: React.FC = () => {
  const options: TileProps[] = [
    {
      imageSrc: '/assets/images/ceiling1.webp',
      title: 'Ceiling Tiles',
      description: 'A wide variety of ceiling tiles to suit any room and style.',
    },
    {
      imageSrc: '/assets/images/ceiling1.webp',
      title: 'Pine Pattern Board',
      description: 'Classic pine pattern boards for a warm, rustic look.',
    },
    {
      imageSrc: '/assets/images/ceiling1.webp',
      title: 'Shiplap',
      description: 'Trendy shiplap options for a modern farmhouse feel.',
    },
  ];

  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Wall & Ceiling Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <WallCeilingTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            We have many options in stock to help freshen up your home! Come in and take a look at our vast variety of ceiling tiles, pine pattern board, and shiplap.
          </p>
          <p className="text-xl font-semibold">
            Visit us to explore our extensive selection!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WallCeilingSection;
