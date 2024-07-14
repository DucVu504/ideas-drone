"use client"
import React from 'react'
import Image from 'next/image'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./Projects.module.css";
import Link from 'next/link';

const OPTIONS = { align: 'start' }

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const projects = [
    {
      title: "Ghi hiện trạng môi trường sông Cái Lớn và Cái Bé",
      image: "/images/homepage/picture1.jpg",
      description: "Xem thêm >>"
    },
    {
      title: "Khảo sát hiện trạng mỏ X, tỉnh Bình Dương",
      image: "/images/homepage/picture2.png",
      description: "Xem thêm >>"
    },
    {
      title: "Khảo sát tấm năng lượng mặt trời",
      image: "/images/homepage/picture3.jpg",
      description: "Xem thêm >>"
    },
    {
      title: "Khảo sát hiện trạng chung cư cao tầng",
      image: "/images/homepage/picture4.png",
      description: "Xem thêm >>"
    },
    {
      title: "Khảo sát địa hình và dựng mô hình 3D Lâm Đồng",
      image: "/images/homepage/picture5.jpg",
      description: "Xem thêm >>"
    },
    {
      title: "Khảo sát tuyến tính địa hình (1:1000) tại TP.HCM",
      image: "/images/homepage/picture6.jpg",
      description: "Xem thêm >>"
    },
    // Add more projects as needed
  ]

  return (
    <div className={`${styles.custom__bg__image}  bg-center p-10`}>
    <div className="text-center text-5xl py-6 px-10 border-b-2 border-green-500 mb-4 mx-40">
        <span className="text-white">CÁC DỰ ÁN CỦA </span>
      <span className="text-green-500">IDEAS-DRONE</span>
    </div>
    <section className={`${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
        {projects.map((project, index) => (
          <div className={styles.embla__slide} key={index}>
            <div className="item">
              <h4 className="text-2xl rounded-t-lg text-white font-bold py-3 px-3 bg-green-500 bg-opacity-30">{project.title}</h4>
              <p>
              <img className="rounded-b-lg  w-96 h-64 object-cover transform hover:scale-110 transition-transform duration-200" title={project.title} alt={project.title} src={project.image} />
              </p>
              <p className="text-white py-4 hover:text-green-500">
                <Link href="/projects">{project.description}</Link>
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>     
    </div>
  )
};

export default Projects;
