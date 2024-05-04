import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import images
import img2 from '/public/assets/images/JSS_2.webp';
import img3 from '/public/assets/images/JSS_3.webp';
import img4 from '/public/assets/images/JSS_4.webp';
import img5 from '/public/assets/images/JSS_5.webp';
import img6 from '/public/assets/images/Truck1_1600_x_600_px_2048x.webp';
import img7 from '/public/assets/images/Truck2_1600_x_600_px_2048x.webp';
import logo from '/public/assets/logos/56efc0e9-762b-4000-8025-696d09013ac9 (1).png'; // Import the logo image

interface ImageData {
  src: any;
}

const images: ImageData[] = [
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
];

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-carousel relative w-full h-secreen overflow-hidden">
      <div className="image-item px-48 py-48">
        {images.map((imageData, index) => (
          <div key={index} className={`transition-opacity duration-9000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute'} absolute inset-0`}>
            <Image
              src={imageData.src}
              alt={`Display Image ${index + 1}`}
              layout='fill'
              objectFit='cover'
              quality={75}
            />
            {index === currentImageIndex && ( // Conditionally render the overlay and logo when it's the current image
              <div className="overlay absolute inset-0 bg-red-950 bg-opacity-60 flex items-center justify-center">
                <div className="logo-container">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={700} // Adjust width as needed
                    height={600} // Adjust height as needed
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
