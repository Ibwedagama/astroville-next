import React from 'react'
import Container from '../../../Base/Container/Container'

import styles from './Members.module.scss'

const Members = () => {
  return (
    <Container>
      <div className="flex flex-col gap-8 mb-24 md:gap-32 md:mb-32">

        {/* Member 1 */}
        <div
          className="
          flex flex-col gap-8
          md:flex-row md:gap-16 md:flex-row-reverse
          "
        >
          <div className={`${styles.memberImage} w-full md:w-300 lg:w-300`}>
            <img
              src="https://picsum.photos/id/1/600/400"
              alt="image1"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full">
            <h2 className="font-display text-brand-dark font-medium text-xl mb-4">
              Astroville Member 1
            </h2>
            <p className="text-brand-text leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime minus ut unde
              consequatur ipsum tempore ducimus impedit accusantium numquam! Aperiam eligendi ut
              aspernatur odit et enim quaerat at temporibus esse maiores rem modi corporis magnam
              excepturi earum unde, numquam molestiae vel suscipit tenetur! Ullam aperiam eos
              tempore ut ea!
            </p>
          </div>
        </div>

        {/* Member 2 */}
        <div
          className="
          flex flex-col gap-8
          md:flex-row md:gap-16
          "
        >
          <div className={`${styles.memberImage} w-full md:w-300 lg:w-300`}>
            <img
              src="https://picsum.photos/id/10/600/400"
              alt="image1"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full">
            <h2 className="font-display text-brand-dark font-medium text-xl mb-4">
              Astroville Member 2
            </h2>
            <p className="text-brand-text leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime minus ut unde
              consequatur ipsum tempore ducimus impedit accusantium numquam! Aperiam eligendi ut
              aspernatur odit et enim quaerat at temporibus esse maiores rem modi corporis magnam
              excepturi earum unde, numquam molestiae vel suscipit tenetur! Ullam aperiam eos
              tempore ut ea!
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Members
