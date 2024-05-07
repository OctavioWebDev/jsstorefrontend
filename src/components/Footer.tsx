'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faTiktok,
}   
    from '@fortawesome/free-brands-svg-icons';
import "leaflet/dist/leaflet.css";
import ContactForm from './ContactForm';

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Footer() {
    // Define position as a tuple [latitude, longitude]
    const position: [number, number] = [41.7537494, -83.5676985]; // Example position for the map (London)

    return (
        <div className="bg-red-950 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-4 border-cyan-950">
                {/* Business Info */}
                <div className='ml-8 py-5 space-y-3'>
                    <h2 className="font-semibold">Contact Us</h2>
                    <p>
                        <a href="https://maps.google.com/?q=7555+Lewis+Ave,+Temperance,+Michigan" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 7555 Lewis Ave., Temperance, MI 48182
                        </a>
                    </p>
                    <p>
                         <a href="tel:+1734224-0978">
                            <FontAwesomeIcon icon={faPhone} /> +1(734)224-0978
                        </a>
                    </p>
                    <p>
                        <a href="mailto:contact@jacobssupply.com">
                            <FontAwesomeIcon icon={faEnvelope} /> contact@jacobssupply.com
                        </a>
                    </p>
                    <div className="flex space-x-3">
                    <p>
                    <a href="https://www.facebook.com/JacobsSupply/" target="_blank" rel="noopener noreferrer" className="text-md">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    </p>
                    <p>
                    <a href="https://www.instagram.com/jacobssupply/" target="_blank" rel="noopener noreferrer" className="text-md">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </p>
                    <p>
                    <a href="https://www.youtube.com/channel/UC56iAES3fwkcVktW3B9htrg" target="_blank" rel="noopener noreferrer" className="text-md">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    </p>
                    <p>
                    <a href="https://www.tiktok.com/@jacobssupply" target="_blank" rel="noopener noreferrer" className="text-md">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    </p>
                    </div>
                </div>
                {/* Contact Form */}
                <div className='py-5 px-5'>
                    <ContactForm />
                </div>
                {/* Map */}
                <div className='py-5 px-5 rounded'>
                    <MapContainer center={position} zoom={13} style={{ height: '425px', width: '100%' }} scrollWheelZoom={false}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                We are here!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
