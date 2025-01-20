import React, { useEffect } from 'react'
import TestimoniHeader from './sections/header'
import TestimoniCTA from './sections/cta'
import CTASection from '../product-and-services/section/cta-section'

function FishermenTestimoni() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex flex-col w-full overflow-x-hidden'>
      <TestimoniHeader />
      <TestimoniCTA />
      <CTASection />
    </div>
  )
}

export default FishermenTestimoni