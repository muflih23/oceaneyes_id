import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {

  const navigate = useNavigate()

  return (
    <div
      className="w-full h-screen lg:h-[90vh] flex justify-center items-center bg-[url('https://storage.oceaneyes.id/oceaneyes/home/DSC06900.jpg')] bg-center lg:bg-center bg-cover bg-no-repeat"
    >
      <div className='w-full h-full flex flex-col justify-center bg-black bg-opacity-30 px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
        <div className='flex max-w-[1120px]'>
          <h1 className='font-hero font-semibold text-[36px] xl:text-[45px] text-white text-left drop-shadow-xl'>Oceaneyes for Your Bussiness and Ocean Sustainability</h1>
        </div>
        <button
          onClick={() => navigate('/product-and-services')}
          className='w-fit flex justify-center items-center py-2 px-4 rounded-[50px] text-white font-bold bg-secondary text-sm'
        >
          Our Products
        </button>
      </div>
    </div>
  )
}

export default HeroSection