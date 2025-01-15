import React, { useEffect } from 'react'
import FishingGroundMapHeader from './section/header'
import FishingGroundMapFeatures from './section/features'
import FishingGroundMapDisplay from './section/display'
import FishingGroundMapStep from './section/step'
import CTASection from '../product-and-services/section/cta-section'

function FishingGroundMap() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <FishingGroundMapHeader />
      <FishingGroundMapFeatures />
      <FishingGroundMapDisplay />
      <FishingGroundMapStep />
      <CTASection />
    </div>
  )
}

export default FishingGroundMap