/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import HERO_IMAGES from '../../../../static/heroImages'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  return (
    <section className="h-screen">
      <div className="navigation-wrapper h-3/4 md:h-full lg:h-full">
        <div ref={sliderRef} className="keen-slider h-full">
          {HERO_IMAGES.map((image) => (
            <div className="keen-slider__slide" key={image.id}>
              <img
                className="object-cover object-center h-full w-full"
                src={image.src}
                alt={image.alt}
              />

              <div
                className="
                absolute w-full h-full inset-0 p-8 flex flex-col 
                items-center text-white justify-center
                md:items-start md:justify-end
                "
              >
                <h1
                  className="
                  font-display font-medium text-4xl text-center px-20 leading-normal mb-6
                  md:text-left md:p-0 md:text-5xl
                  "
                >
                  Capture the Moment
                </h1>
                <hr className="border-brand-gray border-opacity-50 w-3/4 mb-6 md:p-0 md:w-full" />
                <p className="font-display font-thin text-white leading-normal">
                  - {image.caption}
                </p>
              </div>
            </div>
          ))}
          <div
            className="absolute w-full p-8 flex justify-center bottom-0 md:justify-end"
          >
            <p className="font-display text-white text-center">
              <strong>{currentSlide + 1}</strong> / {slider.details().size}
            </p>
          </div>
        </div>
        {slider && (
          <>
            <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} />
            <ArrowRight onClick={(e) => e.stopPropagation() || slider.next()} />
          </>
        )}
      </div>
    </section>
  )
}

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

function ArrowLeft(props) {
  return (
    <div onClick={props.onClick} className={'arrow arrow--left'}>
      <BiChevronLeft className="text-3xl" />
    </div>
  )
}

function ArrowRight(props) {
  return (
    <div onClick={props.onClick} className={'arrow arrow--right'}>
      <BiChevronRight className="text-3xl" />
    </div>
  )
}

export default Hero
