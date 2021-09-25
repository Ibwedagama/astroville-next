import React from 'react'
import Container from '../../../Base/Container/Container'
import Button from '../../../Base/Button/Button'
import { BiRightArrowAlt } from 'react-icons/bi'

const AboutUs = () => {
  const icons = <BiRightArrowAlt className="text-white text-2xl" />

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 md:pb-20">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-spartan text-3xl font-medium text-brand-dark mb-8 text-center md:text-left">
            About Us
          </h1>

          <p className="text-brand-text font-medium mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum lacinia magna
            sollicitudin cursus. Cras sagittis ante turpis, sit amet volutpat purus congue cursus.
          </p>
          <p className="text-brand-text font-medium mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum lacinia magna
            sollicitudin cursus. Cras sagittis ante turpis, sit amet volutpat purus congue cursus.
          </p>

          <Button label="Know More" icon={icons} />
        </div>

        <div style={{height: '400px', width: '341px'}} className="hidden justify-self-end md:block">
          <img src="https://picsum.photos/id/20/1280/720" alt="About Us" className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </Container>
  )
}

export default AboutUs
