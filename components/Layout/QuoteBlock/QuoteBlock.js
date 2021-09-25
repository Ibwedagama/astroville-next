import React from 'react'

const QuoteBlock = () => {
  return (
    <div
      className="
      bg-brand-gray text-brand-dark flex flex-col items-center justify-center p-16 text-center
      md:p-12 lg:p-20
      "
    >
      <h2 className="font-display text-xl leading-loose mb-4 md:text-2xl">Sky is Blue & Rose is Red</h2>
      <p className="text-brand-pink font-bold">- Astroville</p>
    </div>
  )
}

export default QuoteBlock
