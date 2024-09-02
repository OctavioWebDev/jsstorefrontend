'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const KitchenBathSection: React.FC = () => {
    return (
        <section className="py-12 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Kitchen & Bath</h2>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <Link
                            href="https://www.palmerdonavin.com/products/cabinets/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="relative h-96 w-full">
                                <Image
                                    src="/images/kitchen-bath-showcase.jpg"
                                    alt="Kitchen and Bath Showcase"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </Link>

                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-lg mb-4">
                            We are working with Palmer Donavin to bring great quality special order cabinets and bathroom vanities.
                        </p>
                        <p className="text-lg mb-4">
                            If you order a product they have in stock, we can get it to you in under a week!
                        </p>
                        <p className="text-xl font-semibold mb-4">
                            Click the photo to view their in-stock products!
                        </p>
                        <Link
                            href="https://www.palmerdonavin.com/products/cabinets/"
                            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Palmer Donavin Cabinets
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default KitchenBathSection;
