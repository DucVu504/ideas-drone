"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import styles from "./hero.module.css"


const PresentBlock = ({ content }) => {
  return (
    <div className="w-full px-20 left-1/2">
      <div className="z-10 max-w-2xl mb-8 p-2 rounded-lg overflow-hidden bg-black bg-opacity-10">
        <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-gray">
          DỊCH VỤ ỨNG DỤNG UAV <span className="text-green-500">IDEAS-DRONE</span>
        </h1>
        <p className="py-5 text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl">
          {content.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br/>
              </React.Fragment>
            ))}
        </p>
        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
          <a
            href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
            target="_blank"
            rel="noopener"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-green-500 rounded-md hover:bg-green-600"
          >
            ĐẶT LỊCH
          </a>
        </div>
      </div>
    </div>
  );
};

function Hero() {
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
    }, 50000); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);


  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const models = [
    { id: 1,
      content: ['Khảo sát và lập bản đồ thông minh, Xây dựng mô hình 3D', 'Kiểm tra cấu trúc'],
      path: "/images/homepage/mavic_pro_1.jpeg"
    },
    { id: 2,
      content: ['Phân tích môi trường', 'Đào tạo và Tư vấn Doanh nghiệp'],
      path: "/images/homepage/phantom4_RTK3.jpeg"
    },
    { id: 3,
      content: ['Các sản phẩm Chuyên dụng'],
      path: "/images/homepage/phantom4_RTK2.jpeg"
    },

  ];
  return (
    <div className={`${styles.embla} mx-auto w-screen h-[900px]`} ref={emblaRef}>
      <div className={`${styles.embla__container} h-full`}>
        {models.map((model, index) => (
          <div key={model.id} className={`${styles.embla__slide} flex items-center justify-center main-banner item-${index + 1} object-cover relative`}>
            {/* 
             */}
            <Image 
            src={model.path} 
            alt={`Slide ${index + 1}`} 
            layout="fill" 
            objectFit="cover" 
            objectPosition="center" 
            className="absolute inset-0 w-full h-full"
          />
            <div className="absolute inset-0 flex items-center justify-center main-banner item-1">
              <PresentBlock content={model.content} /> 
            </div>
          </div>
        ))}
      </div>
      {typeof scrollPrev === 'function' && (
        <button onClick={scrollPrev} aria-label="Previous" className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent border-none">
          <ChevronLeftIcon className="h-8 w-8 text-white opacity-50" />
        </button>
      )}
      {typeof scrollNext === 'function' && (
        <button onClick={scrollNext} aria-label="Next" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent border-none">
          <ChevronRightIcon className="h-8 w-8 text-white opacity-50" />
        </button>
      )}
    </div>
  );
};
  
export default Hero;
