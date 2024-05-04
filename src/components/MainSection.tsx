'use client';

import React from 'react';
import promoVideo from '/public/assets/videos/Jacob\'s Supply Commercial.mp4';

export default function MainSection() {
    return (
        
            <section className="bg-cyan-900 p-8">
                <div className="container mx-auto mt-12 mb-12 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:justify-between">
                    <div className='lg:w-[calc(100%-16px)]'> {/* Adjust width as needed */}
                    <div className='border-2 border-red-950 p-8 mr-20 rounded-xl'>
                        <h1 className="tracking-tighter py-3 px-8 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-50 to-red-300">Quality building materials at wholesale prices!</h1>
                        <p className="text-center py-3 px-8">
                            We specialize in providing high-quality solutions tailored to your needs.
                            Whether you&apos;re looking for efficient services or innovative products,
                            we&apos;re here to help you achieve your goals.
                        </p>
                        </div>
                    </div>
                    <div className='lg:w-[calc(100%-16px)]'> {/* Adjust width as needed */}
                        <div className='aspect-w-16 aspect-h-9 overflow-hidden rounded-xl'>
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