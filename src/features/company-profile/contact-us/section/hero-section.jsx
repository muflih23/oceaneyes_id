import React, { useRef } from 'react'
import HeroTitle from '../../../../components/atoms/hero-title'
import SectionTitle from '../../../../components/atoms/section-title'
import { Input } from 'antd';
import useContactForm from '../hook/useContactForm';

function ContactHeroSection() {

  const {
    handleInputChange,
    formSubmit,
  } = useContactForm()

  const { TextArea } = Input;

  return (
    <div
      className="w-full lg:min-h-[100vh] flex justify-center items-center bg-[url('../public/card-placeholder.jpg')] bg-center lg:bg-center bg-cover bg-no-repeat"
    >
      <div className='w-full h-full flex flex-col lg:flex-row lg:justify-between items-center px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
        <div className='flex flex-col h-full md:w-full lg:w-fit justify-between gap-y-10 mt-[90px] lg:mt-0'>
          <div className='flex flex-col gap-y-2'>
            <HeroTitle
              className={`!text-white lg:!text-left`}
              text={"Contact Us"}
            />
            <SectionTitle
              className={`!text-white lg:!text-lg !text-left`}
              text={`Sounds good to be true? Let's give it a go!`}
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <div className='flex gap-x-4'>
              <div className="flex flex-col w-full gap-y-4 bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-lg max-w-[200px]">
                <h3 className="font-semibold text-white text-[20px]">Kyoto Office</h3>
                <ul className="space-y-4">
                  <li className="font-normal text-white text-sm">Kyoto City, Nakagyo Ward, Uraideyama-cho 308 Yamachu Building 26</li>
                </ul>
              </div>
              <div className="flex flex-col w-full gap-y-4 bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-lg max-w-[200px]">
                <h3 className="font-semibold text-white text-[20px]">Tokyo Office</h3>
                <ul className="space-y-4">
                  <li className="font-normal text-white text-sm">402 Taiyo Building, 3-27-1 Kanda Sakumacho, Chiyoda-ku, Tokyo 101-0025</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-4 bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-semibold text-white text-[20px]">Contact Person</h3>
              <h4 className="font-normal text-white text-sm">Oceaneyes Representative for Indonesia</h4>
              <h4 className="font-normal text-white text-sm">Ketut Widiarta Yasa</h4>
              <h4 className="font-normal text-white text-sm">+62 812 1183 4752</h4>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-10 p-8 bg-white mb-10 w-full lg:w-[500px] rounded-xl shadow-xl'>
          <div className='flex flex-col gap-y-1'>
            <h3 className='text-xl font-semibold'>Get In Touch</h3>
            <h4 className='text-base text-textGray'>You can reach us anytime</h4>
          </div>
          <div className="grid w-full grid-cols-1 gap-y-4">
            <div>
              <Input
                placeholder="Full name"
                name="fullName"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className='flex w-full gap-x-4'>
              <Input
                placeholder="Company"
                name="company"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                placeholder="Email"
                name="email"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                name="phoneNumber"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <Input
                placeholder="Subject"
                name="subject"
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none transition-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="flex w-full">
              <TextArea
                placeholder="Your message"
                name="message"
                onChange={(e) => handleInputChange(e)}
                className="flex !rounded-none border-0 border-b-2 px-2 py-2 placeholder:text-textGray focus:border-b-primary hover:border-b-secondary focus:outline-none focus:shadow-none !transition-none"
              />
            </div>
            <div className="w-full pt-10">
              <button
                onClick={() => formSubmit}
                className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHeroSection