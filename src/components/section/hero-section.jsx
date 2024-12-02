import React, { useRef } from 'react'

function HeroSection({
    id,
    ref,
}) {


    return (
        <div
            id={id}
            ref={ref}
            className="w-full h-screen flex justify-center items-center bg-[url('../public/banner.webp')] bg-center bg-cover bg-no-repeat"
        >
            <div className='w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.6)] px-8 xl:px-0'>
                <div className='flex max-w-[1120px]'>
                    <h1 className='font-hero text-[36px] lg:text-[72px] xl:text-[72px] text-white text-center'>Exclusively Crafted Premium Coconut Oil From the Beautiful Archipelago of Indonesia</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection