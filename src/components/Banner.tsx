import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="/assets/images/jsstorefront.webp"
        alt="JS Store Front"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-cyan-950 opacity-80"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          30-50% OFF THE BIG BOX STORES PRICING
        </h1>
      </div>
    </div>
  );
};

export default Banner;
