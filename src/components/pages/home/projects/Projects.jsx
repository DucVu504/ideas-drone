"use client"
import React from 'react'


import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./projects.module.css";
import Link from 'next/link';
import Container from "./Container";
import { useTranslation } from 'next-i18next';

const OPTIONS = { align: 'start' }

const Projects = () => {
  const { t } = useTranslation("public");
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const projects = [
    {
      title: t('projects.prj_3'),
      image: "/images/homepage/image_prj3.jpg",
      description: t('projects.more') + ">>"
    },
    {
      title: t('projects.prj_5'),
      image: "/images/homepage/image_prj5.jpg",
      description: t('projects.more') + ">>"
    },
    {
      title: t('projects.prj_6'),
      image: "/images/homepage/image_prj6.jpg",
      description: t('projects.more') + ">>"
    },
    {
      title: t('projects.prj_2'),
      image: "/images/homepage/image_prj2.png",
      description: t('projects.more') + ">>"
    },
    {
      title: t('projects.prj_4'),
      image: "/images/homepage/image_prj4.png",
      description: t('projects.more') + ">>"
    },
    {
      title: t('projects.prj_1'),
      image: "/images/homepage/image_prj1.jpg",
      description: t('projects.more') + ">>"
    },
    // Add more projects as needed
  ]

  return (
    <div className={`${styles.custom__bg__image}  bg-center p-10`}>
      <Container>
        <div className="text-center text-5xl py-6 px-10 border-b-2 border-green-500 mb-4 ">
          <span className="text-white">{t('projects.title')} </span>
          <span className="text-green-500">IDEAS-DRONE</span>
        </div>
        <section className={`${styles.embla}`}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {projects.map((project, index) => (
                <div className={styles.embla__slide} key={index}>
                  <div className={`${styles.item}`}>
                    <h4 className="text-2xl flex-shrink  h-32 rounded-t-lg text-white font-bold py-3 px-3 bg-green-500 bg-opacity-50">{project.title}</h4>
                    <img className="rounded-b-lg  object-cover transform hover:scale-110 hover:rounded-lg transition-transform duration-200" title={project.title} alt={project.title} src={project.image} />
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
      </Container>
    </div>
  )
};

export default Projects;
