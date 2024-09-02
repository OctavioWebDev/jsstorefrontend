'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const thewordofgodData = [
  {
    quote: "The Lord detests dishonest scales, but accurate weights find favor with him.",
    author: "Proverbs 11:1"
  },
  {
    quote: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    author: "Colossians 3:23-24"
  },
  {
    quote: "Let each of you look not only to his own interests, but also to the interests of others.",
    author: "Philippians 2:4"
  }
];

export default function TheWordOfGod() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % thewordofgodData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    
    <div className="relative w-full h-[600px]">
      <Image
        src="/assets/images/aaron-burden-TNlHf4m4gpI-unsplash.jpg"
        alt="Products"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-red-950 bg-opacity-50 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold">The Word Of God</h2>
          <div className="text-center mt-5 mb-10">
            <p className="text-lg italic text-white">{thewordofgodData[index].quote}</p>
            <p className="text-sm mt-2 text-white">— {thewordofgodData[index].author}</p>
          </div>
        </div>
      </div>
  );
}