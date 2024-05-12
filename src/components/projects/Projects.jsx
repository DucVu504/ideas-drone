"use client"
import React from 'react'
import Image from 'next/image'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./Projects.module.css"

function solutionPart(){
    return(
        <div class="item ">
            <h4>Interactive insights</h4>
            <p>
            <Image 
                    title="platform-interactive-insights" 
                    alt="platform-interactive-insights" 
                    src="/sight/contruction_field_2" 
                    width={500} 
                    height={300}
                />
            </p>
            <p><strong>Built-in trend tracking.</strong> Offering traditional PDF output, the platform streamlines reporting with in-built annotations that make every model its own interactive record of asset condition and key recommendations.</p>
            <p>Our accessible reports enable efficiency.</p>
        </div>
    );
}

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className={`${styles.custom__bg__image}  bg-center p-10`}>
    <div className="text-center text-5xl p-6">
        <span className="text-white">CÁC DỰ ÁN CỦA </span>
      <span className="text-green-500">IDEAS-DRONE</span>
    </div>
    <section className={`${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
                <div class="item ">
                    <h4 className="text-3xl text-white font-bold py-3">Interactive insights</h4>
                    <p><img className = "rounded-lg " title="platform-interactive-insights" alt="platform-interactive-insights" src="https://images.unsplash.com/photo-1486611367184-17759508999c?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></p>
                    <p className="text-white"><strong>Built-in trend tracking.</strong> Offering traditional PDF output, the platform streamlines reporting with in-built annotations that make every model its own interactive record of asset condition and key recommendations.</p>
                    <p className="text-white">Our accessible reports enable efficiency.</p>
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

        {/* <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} ${
                    index === selectedIndex ? styles.embla__dotSelected : ''
                    }`}
            />
          ))}
        </div> */}
      </div>
    </section>     
    </div>
  )
}

export default EmblaCarousel
