import React from 'react';
import Image from 'next/image';

interface SidingTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SidingTile: React.FC<SidingTileProps> = ({ imageSrc, title, description }) => (
  <div className="flex text-white flex-col items-center p-4 mb-8 md:mb-0 ounded-lg shadow-md">
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

const SidingSection: React.FC = () => {
  const sidingOptions: SidingTileProps[] = [
    {
      imageSrc: '/assets/images/siding1.webp',
      title: 'Engineered Wood Siding',
      description: 'Durable and attractive engineered wood siding options, perfect for various structures.',
    },
    {
      imageSrc: '/assets/images/siding2.webp',
      title: 'Metal Siding',
      description: 'Long-lasting metal siding solutions for barns, sheds, and houses.',
    },
    {
      imageSrc: '/assets/images/siding1.webp',
      title: 'LP SmartSide',
      description: 'Various sizes of LP SmartSide in stock for your siding projects.',
    },
  ];

  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Siding Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sidingOptions.map((option, index) => (
            <SidingTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            We have many siding options perfect for your barn, shed or house. Find the perfect look with engineered wood and metal siding. We have many different sizes of LP SmartSide in stock!
          </p>
          <p className="text-xl font-semibold">
            Come in and check out our current selection!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SidingSection;
