import React from 'react'
import Container from '../../../Base/Container/Container'
import Button from '../../../Base/Button/Button'

import {BiRightArrowAlt} from 'react-icons/bi'

const WhatWeDo = () => {
  const icons = (
    <BiRightArrowAlt className="text-white text-2xl"/>
  )
  
  return (
    <Container>
      <h1 className="font-spartan text-3xl font-medium text-brand-dark mb-4">What We Do</h1>
      <p className="text-brand-text font-medium mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum lacinia magna sollicitudin cursus. Cras sagittis ante turpis, sit amet volutpat purus congue cursus.</p>
      
      <Button label="Learn More" icon={icons}/>
    </Container>
  )
}

export default WhatWeDo
