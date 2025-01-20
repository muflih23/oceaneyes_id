import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroTitle from '../../../../components/atoms/hero-title';

function AboutHeroSection() {

  const navigate = useNavigate();

  return (
    <div
      className="w-full h-screen lg:h-[90vh] flex justify-center items-center bg-[url('https://storage.oceaneyes.id/oceaneyes/about/about.jpg')] bg-center lg:bg-center bg-cover bg-no-repeat"
    >
      <div className='w-full h-full flex flex-col justify-center bg-[rgba(0,0,0,0.5)] px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
        <div className='flex max-w-[1120px]'>
          <HeroTitle 
            text={"We Bring Fishery Industry to the Next Level"}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutHeroSection