import React from 'react';
import Image from 'next/image';

const WindowsSection: React.FC = () => {
  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Windows</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <Image
              src="/images/windows-showcase.jpg"
              alt="Windows Showcase"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-4">
              Our warehouse is currently being remodeled and our inventory system doesn't reflect what we actually have. You are welcome to come and search through our selection and find the perfect window for your project!
            </p>
            <p className="text-lg mb-4">
              We now can order windows through Sunrise, Vinylmax and ProVia!
            </p>
            <p className="text-xl font-semibold mb-4">
              Stop in and let our expert team help build your window package!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowsSection;
