import React, { useRef } from 'react'
import HeroTitle from '../../../../components/atoms/hero-title'
import SectionTitle from '../../../../components/atoms/section-title'

function ContactHeroSection() {
  return (
    <div
      className="w-full lg:h-[70vh] flex justify-center items-center bg-primaryPale bg-center lg:bg-center bg-cover bg-no-repeat"
    >
      <div className='w-full h-full flex flex-col justify-center items-center px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
        <div className='flex flex-col max-w-[1120px]'>
          <HeroTitle
            className={`!text-foreground !text-center`}
            text={"Get in Touch with Us"}
          />
          <SectionTitle
            className={`!text-textGray !text-lg`}
            text={`Sounds good to be true? Let's give it a go!`}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactHeroSection