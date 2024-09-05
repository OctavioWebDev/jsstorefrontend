import React from 'react';
import Image from 'next/image';

const MonthlyDealsPage = () => {
  const flierPath = '/assets/monthlydeals/1_92c8f7ce-a63e-41b6-8cfa-d53da7f8fcf6_2048x2048.webp';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Monthly Deals</h1>
      <div className="relative w-full" style={{ height: '80vh' }}>
        <Image
          src={flierPath}
          alt="Monthly Deals Flier"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MonthlyDealsPage;



