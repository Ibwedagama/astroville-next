import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import SERVICE_IMAGES from '../../../../static/serviceImages'
import Container from '../../../Base/Container/Container'

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })
  return (
    <Container>
      <h1 className="font-spartan text-3xl font-medium text-brand-dark mb-4 md:hidden">
        Our Services
      </h1>

      <section className="service-slider">
        <div className="navigation-wrapper h-full">
          <div ref={sliderRef} className="keen-slider h-full">
            {SERVICE_IMAGES.map((image) => (
              <div className="keen-slider__slide" key={image.id}>
                <img
                  className="object-cover object-center h-full w-full"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
          {slider && (
            <>
              <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} />
              <ArrowRight onClick={(e) => e.stopPropagation() || slider.next()} />
            </>
          )}
        </div>
        <div 
          className="
          w-full flex justify-center -top-20
          lg:justify-between
          ">
          <p 
            className="
            font-display text-brand-dark mt-2 text-center hidden
            lg:inline-block
            ">
            <strong>{currentSlide + 1}</strong> / {SERVICE_IMAGES.length}
          </p>
          <div
            className="
            relative -top-8 bg-brand-dark py-4 px-8 flex-initial items-center text-white text-md
            lg:right-4
            "
          >
            - {SERVICE_IMAGES[currentSlide]?.caption || 'Our Service'}
          </div>
        </div>
      </section>
      {slider && (
        <div className="dots md:hidden">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            )
          })}
        </div>
      )}
    </Container>
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

export default OurServices
