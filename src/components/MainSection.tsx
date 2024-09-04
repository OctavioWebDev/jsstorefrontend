'use client';

import React from 'react';
import promoVideo from '/public/assets/videos/Jacob\'s Supply Commercial.mp4';

export default function MainSection() {
    return (
        
            <section className="bg-cyan-900 text-white p-8">
                <div className="container mx-auto mt-12 mb-12 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:justify-between">
                    <div className='lg:w-[calc(100%-16px)]'> 
                    <div className='py-8 px-8 '>
                        <h1 className="tracking-tighter py-3 px-8 text-center md:text-right lg:text-right text-4xl font-bold">Quality building materials at wholesale prices!</h1>
                        <p className="tracking-tighter text-center md:text-right lg:text-right text-2xl py-8 px-8">
                            We specialize in providing high-quality solutions tailored to your needs.
                            Whether you&apos;re looking for efficient services or innovative products,
                            we&apos;re here to help you achieve your goals.
                        </p>
                        </div>
                    </div>
                    <div className='lg:w-[calc(100%-16px)]'>
                        <div className='aspect-w-16 aspect-h-16 overflow-hidden py-8 px-8'>
                            <video
                                className="mx-auto aspect-video overflow-hidden object-cover"
                                controls
                                autoPlay
                                muted
                                loop
                            >
                                <source src={promoVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
    );
}