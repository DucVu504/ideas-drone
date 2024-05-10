"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Button } from '@mui/material';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
// import Autoplay from 'embla-carousel-autoplay'

function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, )
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
        return;
      }
      emblaApi.scrollNext();
    }, 10000); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);


  const scrollPrev = () => emblaApi && emblaApi.scrollPrev(); // Đảm bảo emblaApi đã được khởi tạo trước khi sử dụng
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="embla mx-auto w-screen h-[800px]  " ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center main-banner item-1 object-cover relative">
          <Image src="https://images.unsplash.com/photo-1479152471347-3f2e62a2b2a7?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" width={windowWidth} height={500} layout="responsive" />
          <div className="absolute inset-0 flex items-center justify-center main-banner item-1">
            <div className="text-4xl font-bold text-white">Slide 1</div>
          </div>
        </div>
        <div className="embla__slide flex items-center justify-center main-banner item-1 object-cover relative">
          <Image src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" width={windowWidth} height={500} layout="responsive" />
          <div className="absolute inset-0 flex items-center justify-center main-banner item-2">
            <div className="text-4xl font-bold text-white">Slide 2</div>
          </div>
        </div>
        <div className="embla__slide flex items-center justify-center main-banner item-1 object-cover relative">
          <Image src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" width={windowWidth} height={500} layout="responsive" />
          <div className="absolute inset-0 flex items-center justify-center main-banner item-2">
            <div className="text-4xl font-bold text-white">Slide 3</div>
          </div>
        </div>

      </div>
      <button onClick={scrollPrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent border-none">
        <ChevronLeftIcon className="h-8 w-8 text-white opacity-50" />
      </button>
      <button onClick={scrollNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent border-none">
        <ChevronRightIcon className="h-8 w-8 text-white opacity-50" />
      </button>
    </div>
  )
}

export default function Home() {
  return EmblaCarousel()
}