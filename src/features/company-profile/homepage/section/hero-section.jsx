import React, { useRef } from 'react'

function HeroSection() {
    return (
        <div
            className="w-full h-screen flex justify-center items-center bg-[url('../public/banner.webp')] bg-center lg:bg-center bg-cover bg-no-repeat"
        >
            <div className='w-full h-full flex flex-col justify-center bg-[rgba(0,0,0,0.1)] px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
                <div className='flex max-w-[1120px]'>
                    <h1 className='font-hero font-semibold text-[36px] xl:text-[72px] text-white text-left'>Oceaneyes for Your Bussiness and Ocean Sustainability</h1>
                </div>
                <button
                    className='w-[141px] md:w-[153px] lg:w-[200px] flex justify-center items-center py-3 rounded-[50px] text-white font-bold bg-secondary text-base lg:text-[20px]'
                >
                    Our Products
                </button>
            </div>
        </div>
    )
}

export default HeroSection