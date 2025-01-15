import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { FaCheckCircle } from 'react-icons/fa'

function FishingGroundMapStep() {
  return (
    <SectionLayout
      classNames={`!bg-primaryLGray lg:!py-[80px]`}
    >
      <div className='flex flex-col w-full gap-y-10 items-center'>
        <SectionTitle
          text={`How it Works`}
          className={`!text-foreground !font-hero`}
        />
        <div className='flex w-full lg:max-w-[1320px]'>
          <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-10'>
            {/* Step Card 1*/}
            <div className='flex flex-col w-full gap-y-6'>
              <img src='/step1.jpg' className='rounded-md' />
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Project Initializing</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Hearing on desired functions and options to be realized</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Signing of basic agreement including confidentiality clauses</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Accept the data to be evaluate </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Step Card 2*/}
            <div className='flex flex-col w-full gap-y-6'>
              <img src='/step2.jpg' className='rounded-md' />
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Feasibility Check</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Report on data evaluation</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Fee Proposal, Signing the building contract and Deposit Fee </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Step Card 1*/}
            <div className='flex flex-col w-full gap-y-6'>
              <img src='/step3.jpg' className='rounded-md' />
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Building Model</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Building model work 2-4 Months Process</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Accuracy Report</h6>
                  </div>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Operation and Training</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Step Card 1*/}
            <div className='flex flex-col w-full gap-y-6'>
              <img src='/step2.jpg' className='rounded-md' />
              <div className='flex flex-col w-full gap-y-4'>
                <h5 className='font-semibold text-xl'>Deploying</h5>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex w-full gap-x-4 items-start'>
                    <div className='w-[16px]'>
                      <FaCheckCircle size={16} className='text-lime-400 mt-1' />
                    </div>
                    <h6 className='font-normal text-base'>Platform Deployment</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default FishingGroundMapStep