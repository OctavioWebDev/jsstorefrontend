import React from 'react';
import Image from 'next/image';

interface InsulationTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const InsulationTile: React.FC<InsulationTileProps> = ({ imageSrc, title, description }) => (
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

const InsulationSection: React.FC = () => {
  const insulationOptions: InsulationTileProps[] = [
    {
      imageSrc: '/assets/images/insulation1.webp',
      title: 'Polyiso Foam Boards',
      description: 'High-performance insulation boards, available in 2" to 3" thickness. Ideal for barns and garages.',
    },
    {
      imageSrc: '/assets/images/insulation1.webp',
      title: 'EPS Foam Boards',
      description: 'Versatile and cost-effective insulation solution, perfect for various applications. Available in 2" to 3" thickness.',
    },
    {
      imageSrc: '/assets/images/insulation1.webp',
      title: 'Fiberglass Rolls',
      description: '6\' x 50\' fiberglass rolls, excellent for pole barns and attics. Easy to install and highly effective.',
    },
  ];

  return (
    <section className="py-12 text-whitw">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Insulation Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insulationOptions.map((option, index) => (
            <InsulationTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            Prepare your barn or garage for winter with our polyiso and EPS foam boards in stock in ranging between 2" and 3" thickness.
          </p>
          <p className="text-lg mb-4">
            We also have a rolled option: 6' x 50' fiberglass rolls, perfect for pole barns and attics.
          </p>
          <p className="text-xl font-semibold">
            Stop in and check out our selection!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsulationSection;
