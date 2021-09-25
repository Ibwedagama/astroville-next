import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Container from '../../../Base/Container/Container'
import CLIENT_IMAGES from '../../../../static/clientImages'

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 2, 
    spacing: 15,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })
  return (
    <Container>
      <h1
        className="font-spartan text-3xl font-medium text-brand-dark mb-8 text-center"
        style={{ alignSelf: 'center' }}
      >
        Our Client
      </h1>
      
      {/* Client Gallery */}
      <div
        className="
        hidden w-full h-full grid grid-cols-4 gap-4
        md:grid lg:grid
        "
      >
        {CLIENT_IMAGES.map((image, index) => (
          <div key={index} style={{ height: '150px' }}>
            <img src={image.src} alt="" className="w-full h-full object-cover object-center" />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <section className="client-slider md:hidden lg:hidden">
        <div className="navigation-wrapper h-full">
          <div ref={sliderRef} className="keen-slider h-full">
            {CLIENT_IMAGES.map((image) => (
              <div className="keen-slider__slide" key={image.id}>
                <img
                  className="object-cover object-center h-full w-full"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {slider && (
        <div className="dots md:hidden">
          {[...Array(Math.floor(slider.details().size / 2)).keys()].map((idx) => {
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

export default Clients
