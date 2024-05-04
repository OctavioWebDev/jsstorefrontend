'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from './ui/Search';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    return (
        <header className="bg-red-950 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <Image
                        src="/assets/logos/f20c380a-c4f8-4630-a8e7-1528cc06c67b.png"
                        alt="Company Logo"
                        width={100}
                        height={50}
                    />
                </div>
                <nav className="flex space-x-4 items-center">
                    <Link href="/" className="hover:text-gray-400">
                        Home
                    </Link>
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="hover:text-gray-400">
                            About Us
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href="/about/meet-the-crew" className="block px-4 py-2 hover:bg-gray-100">
                                    Meet the Crew
                                </Link>
                                <Link href="/OurTerms" className="block px-4 py-2 hover:bg-gray-100">
                                    Our Terms
                                </Link>
                                <Link href="/OurStory" className="block px-4 py-2 hover:bg-gray-100">
                                    Our Story
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/gallery" className="hover:text-gray-400">
                        Gallery
                    </Link>
                    <Search />
                </nav>
            </div>
        </header>
    );
}






