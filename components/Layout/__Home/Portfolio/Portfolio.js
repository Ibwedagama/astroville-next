import React from 'react'
import Container from '../../../Base/Container/Container'
import PORTFOLIO_IMAGES from '../../../../static/portfolioImages'

const Portfolio = () => {
  return (
    <Container fullWidth>
      <h1 className="font-spartan text-3xl font-medium text-brand-dark mb-4 md:hidden">
        Portfolio
      </h1>

      <div
        className="
        w-full h-full grid grid-rows-1 gap-4
        md:grid-cols-3 md:grid-rows-0 md:gap-6
        "
      >
        {PORTFOLIO_IMAGES.map((image, index) => (
          <div
            className={`${index > 3 ? 'hidden md:flex lg:flex' : ''} bg-red-300 flex items-center w-full h-full`}
            style={image.type === 'photo' ? { height: '323px' } : { height: '210px' }}
            key={index}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover object-center w-full h-full"
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Portfolio
