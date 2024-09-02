import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RoofingTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const RoofingTile: React.FC<RoofingTileProps> = ({ imageSrc, title, description }) => (
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

const RoofingSection: React.FC = () => {
  const roofingOptions: RoofingTileProps[] = [
    {
      imageSrc: '/images/osb-shingles.jpg',
      title: 'OSB & Fiberglass Shingles',
      description: 'High-quality OSB and durable fiberglass shingles for reliable roofing solutions.',
    },
    {
      imageSrc: '/images/metal-roofing.jpg',
      title: 'Metal Roofing',
      description: 'Graber Post metal roofing materials for long-lasting and attractive roof installations.',
    },
    {
      imageSrc: '/images/roofing-accessories.jpg',
      title: 'Roofing Accessories',
      description: 'Torch down materials and various accessories to complete your roofing project.',
    },
  ];

  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Roofing Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roofingOptions.map((option, index) => (
            <RoofingTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            We buy in bulk so you save on your roofing materials. We have OSB, fiberglass shingles, metal roofing, torch down and other roofing accessories. We proudly stock Graber Post materials and can help you get the right metal roof for your project.
          </p>
          <p className="text-xl font-semibold mb-4">
            Come in and check out our in stock items!
          </p>
          <Link 
            href="/graber-post-color-chart.pdf" 
            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the Graber Post Color Chart here!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoofingSection;
