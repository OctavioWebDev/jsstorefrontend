import React from 'react';
import Image from 'next/image';

interface DoorTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const DoorTile: React.FC<DoorTileProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center p-4 mb-8 md:mb-0 rounded-lg shadow-md">
    <div className="w-full h-64 mb-4 relative">
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

const DoorsSection: React.FC = () => {
  const doorOptions: DoorTileProps[] = [
    {
      imageSrc: '/images/interior-doors.jpg',
      title: 'Interior Doors',
      description: 'Styles: Solid core, Hollow core, Solid wood. Types: Pre-hung, Slabs, Bi-folds, Louvered, French, Dutch.',
    },
    {
      imageSrc: '/images/exterior-doors.jpg',
      title: 'Exterior Doors',
      description: 'Styles: Fiberglass, Steel, Solid wood. Types: Pre-hungs, Slabs, Storm doors, Patio sliders, French doors, Entry doors (w/sidelites & transoms).',
    },
    {
      imageSrc: '/images/custom-doors.jpg',
      title: 'Custom Options',
      description: 'Various sizes available from small to large. Different styles and types to suit your needs. Primed and ready to paint.',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Door Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doorOptions.map((option, index) => (
            <DoorTile key={index} {...option} />
          ))}
        </div>
        <div className="mt-12 text-center text-white">
          <p className="text-lg mb-4">
            We are currently renovating our warehouse and going through our door inventory. 
            Please stop by to see what we have in stock!
          </p>
          <p className="text-lg mb-4">
            These are new doors that are primed and ready to paint. We have sizes available 
            ranging from small to standard to large sizes. We also have different styles and 
            types for whatever suits your needs.
          </p>
          <p className="text-xl font-semibold">
            Give us a call at (734) 224-0978 or stop into our store for more information!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoorsSection;
