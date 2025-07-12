"use client";
import React from 'react';
import { CircleCheckBigIcon, Facebook, Instagram, Package, Truck, Twitter } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function CarouselNavbar() {

  const items = [
    {
      title: 'Title 1',
      description: 'Enviamos contra entrega a toda Colombia',
      icon: <Truck />, // Replace with your image URL
    },
    {
      title: 'Title 2',
      description: 'Enviamos contra entrega a toda Colombia',
      icon: <Package />, // Replace with your icon URL
    },
    {
      title: 'Title 3',
      description: 'Description 3',
      icon: <CircleCheckBigIcon />, // Replace with your image URL
    },
    // Add more items as needed
  ];

  return (
    <div className="bg-[#8f82edff] py-2" >
      <div className="flex justify-between items-center px-4 text-white">
        {/* Carousel Section */}
        <div className="flex-grow flex justify-center items-center gap-2">
          <Carousel
            opts={{
              loop: true, // Esto hace que el carrusel sea infinito
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}>
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex gap-2 justify-center items-center">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="text-base">{item.description}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}

            </CarouselContent>
          </Carousel>

        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4"> {/* Adjust gap as needed */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="size-5 hover:text-gray-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="size-5 hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="size-5 hover:text-gray-300" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </div >
  );
}

export default CarouselNavbar;