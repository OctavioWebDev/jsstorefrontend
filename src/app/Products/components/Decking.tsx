import React from 'react';
import Image from 'next/image';

interface DeckingTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const DeckingTile: React.FC<DeckingTileProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center p-4 mb-8 md:mb-0 rounded-lg shadow-md">
    <div className="w-full h-56 mb-4 relative">
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

const DeckingSection: React.FC = () => {
  const deckingOptions: DeckingTileProps[] = [
    {
      imageSrc: '/images/composite-boards.jpg',
      title: 'Composite Boards',
      description: 'Durable and low-maintenance composite decking from Trex, Armadillo, and DuraLife.',
    },
    {
      imageSrc: '/images/patio-pavers.jpg',
      title: 'Patio Pavers',
      description: 'Create a stunning outdoor living space with our selection of patio pavers.',
    },
    {
      imageSrc: '/images/decking-accessories.jpg',
      title: 'Decking Accessories',
      description: 'Complete your deck with our range of accessories, including railings and lighting.',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Decking Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deckingOptions.map((option, index) => (
            <DeckingTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-white mb-4">
            Get your outdoor space looking great with our many Trex, Armadillo and DuraLife decking options for you 
            including composite boards, patio pavers, and other accessories. We also stock many buyout options 
            that help save you money! We can also special order any Timbertech, Azek, and Trex!
          </p>
          <p className="text-xl text-white font-semibold">
            Come in and check out our selection!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeckingSection;
