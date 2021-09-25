import React from 'react'

const BrandLogo = ({ width, height, type }) => {
  const source = type === 'dark' ? 'img/logo-dark.webp' : 'img/logo-white.webp'
  return (
    <>
      <img src={source} alt="Astroville Logo" width={width} height={height} />
    </>
  )
}

export default BrandLogo
