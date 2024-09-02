'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "About a 30 minute drive from the Toledo area but well worth the time.  They are very friendly and helpful.  Their goal is to help you to get what you need at a great price.  Very low pressure sales.  They sell more than appliances.  It's clean, neat and easy to find.  Just look for the red monster truck in their front yard.  It really helps!",
    author: "Cary Grimm"
  },
  {
    quote: "Great place to go for building & remodeling supplies if you want to save some money.",
    author: "Doug Donnelly"
  },
  {
    quote: "Interesting variety of home improvement items etc. Staff are very friendly and helpful. We bought flooring and decking materials. Check it out",
    author: "Trisha Morrison"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    
    <div className="relative w-full h-[600px]">
      <Image
        src="/assets/images/Products_2048x.webp"
        alt="Products"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-cyan-950 bg-opacity-50 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white text-center font-bold">Thousands of products to choose from</h2>
          <div className="text-center mt-5 mb-10">
            <p className="text-lg italic text-white">{testimonialsData[index].quote}</p>
            <p className="text-sm mt-2 text-white">— {testimonialsData[index].author}</p>
          </div>
        </div>
      </div>
  );
}
