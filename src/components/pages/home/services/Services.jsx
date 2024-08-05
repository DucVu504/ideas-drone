import Image from "next/legacy/image";
import React from "react";
import Container from "./Container";
import { useTranslation } from 'next-i18next';


const Testimonials  = () => {
  const { t } = useTranslation("public");

  const testimonials = [
    {
      title: t('services.sub_title_1'),
      detail: t('services.detail_1'),
      image: "/images/homepage/icon_service1.png"
    },
    {
      title: t('services.sub_title_2'),
      detail:t('services.detail_2'),
      image: "/images/homepage/icon_service2.png"
    },
    {
      title: t('services.sub_title_3'),
      detail: t('services.detail_3'),
      image: "/images/homepage/icon_service3.png"
    },
    {
      title: t('services.sub_title_4'),
      detail: t('services.detail_4'),
      image: "/images/homepage/icon_service4.png"
    },
    {
      title: t('services.sub_title_5'),
      detail: t('services.detail_5'),
      image: "/images/homepage/icon_service5.png"
    },
    {
      title: t('services.sub_title_6'),
      detail:t('services.detail_6'),
      image: "/images/homepage/icon_service6.png"
    },
  ];
  
  return (
    <div className = "bg-gray-100">
    <Container >
    <div className="text-center text-5xl py-8 px-10  mb-4">
        <span className="text-black ">{t('services.title')} </span>
      <span className="text-green-500">IDEAS-DRONE</span>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="overflow-hidden h-80 bg-white rounded-lg shadow-md hover:border  hover:rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col justify-between items-center w-full h-full px-4 rounded-2xl py-8">
            <Image src={testimonial.image} alt={testimonial.title} width={80} height={80} className="object-cover rounded-t-2xl py-4 filter hue-rotate" />
              <p className="text-2xl leading-normal ">
                {testimonial.title}
              </p>
              <p className="leading-normal ">
                {testimonial.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

    </Container>
    </div>
  );
}

export default Testimonials;