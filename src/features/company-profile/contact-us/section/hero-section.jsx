import React, { useRef } from 'react'
import HeroTitle from '../../../../components/atoms/hero-title'

function ContactHeroSection() {
    return (
        <div
            className="w-full h-[70vh] flex justify-center items-center bg-[url('../public/about-banner.webp')] bg-center lg:bg-center bg-cover bg-no-repeat"
        >
            <div className='w-full h-full flex flex-col justify-center bg-[rgba(0,0,0,0.5)] px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
                <div className='flex max-w-[1120px]'>
                    <HeroTitle 
                        text={"How can we help you ? "}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactHeroSection