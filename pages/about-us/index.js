import Head from 'next/head'
import React from 'react'
import Hero from '../../components/Layout/__About/Hero/Hero'
import QuoteBlock from '../../components/Layout/QuoteBlock/QuoteBlock'
import Members from '../../components/Layout/__About/Members/Members'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Astroville | About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <QuoteBlock
        quote={`We believe a photograph is the best way to memorize 
        the important things in your life`}
        author="Astroville"
      />
      <Members></Members>
    </>
  )
}

export default AboutUs
