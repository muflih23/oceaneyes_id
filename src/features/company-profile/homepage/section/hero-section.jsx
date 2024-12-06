import React, { useRef } from 'react'

function HeroSection({
    id,
    ref,
}) {


    return (
        <div
            id={id}
            ref={ref}
            className="w-full h-screen flex justify-center items-center bg-[url('../public/banner.webp')] bg-center lg:bg-center bg-cover bg-no-repeat"
        >
            <div className='w-full h-full flex items-center bg-[rgba(0,0,0,0.1)] px-[22px] xl:px-[67px]'>
                <div className='flex max-w-[1120px]'>
                    <h1 className='font-hero font-extrabold text-[36px] lg:text-[72px] xl:text-[72px] text-white text-left'>Oceaneyes for Your Bussiness and Ocean Sustainability</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection