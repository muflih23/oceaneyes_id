import React from 'react'
import SectionTitle from '../../../../components/atoms/section-title'

function Detail() {
  return (
    <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-[84px]'>
      <div className='flex flex-col w-full justify-center items-center lg:w-[960px] py-10'>
        <div className='flex flex-col w-full justify-center items-center gap-y-2'>
          <h4 className='text-gray-400 font-semibold text-base text-center'>24 October 2025</h4>
          <SectionTitle
            text={"Lorem Ipsum Dolor Sit Amet"}
            className={"!text-center"}
          />
          <h4 className='text-gray-400 font-semibold text-base text-center text-lg'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum</h4>
        </div>
        <div className='flex flex-col w-full justify-center items-center gap-y-6 pt-10'>
          <img src='/card-placeholder.jpg' className='w-full' />
          <div className='flex flex-col w-full gap-y-2'>
            <SectionTitle
              text={"Lorem Ipsum Dolor Sit Amet"}
              className={"!text-left"}
            />
            <h6 className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
            <SectionTitle
              text={"Consectetur Adipiscing Elit"}
              className={"!text-left"}
            />
            <h6 className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
            <SectionTitle
              text={"Lorem Ipsum Dolor Sit Amet"}
              className={"!text-left"}
            />
            <h6 className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
            <SectionTitle
              text={"Consectetur Adipiscing Elit"}
              className={"!text-left"}
            />
            <h6 className='text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
          </div>
        </div>
        <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
          <div className='flex w-full lg:w-[960px]'>
            <SectionTitle
              text={"Latest News"}
              classNames={"!text-left"}
            />
          </div>
          <div className='grid w-full lg:w-[960px] grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4'>
            <div className='flex flex-col w-full gap-y-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-full'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
            <div className='flex flex-col w-full gap-y-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-full'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
            <div className='flex flex-col w-full gap-y-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-full'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
            <div className='flex flex-col w-full gap-y-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-full'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
            <div className='flex flex-col w-full gap-y-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-full'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
            <div className='flex flex-col w-full gap-y-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-full'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail