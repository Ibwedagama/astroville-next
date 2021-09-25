import Head from 'next/head'
import Hero from '../components/Layout/__Home/Hero/Hero'
import WhatWeDo from '../components/Layout/__Home/WhatWeDo/WhatWeDo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Astroville</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <WhatWeDo />
    </>
  )
}
