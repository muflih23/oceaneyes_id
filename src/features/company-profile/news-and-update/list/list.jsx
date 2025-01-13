import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { Input } from 'antd'
import SearchInput from '../../../../components/atoms/input/input'
import { useSearchParams } from 'react-router-dom'

function List() {

  const [searchParams] = useSearchParams();

  return (
    <div className='flex flex-col w-full'>
      <SectionLayout classNames={`!pt-[86px] pb-10 w-full min-h-[70vh] items-center`}>
        <div className='flex justify-center items-center w-full lg:w-[400px]'>
          <SearchInput
            onChange={() => { }}
            onSearch={() => { }}
          />
        </div>
        {searchParams.get('keyword').length > 0 && (
          <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
            <div className='flex w-full lg:w-[800px]'>
              <SectionTitle
                text={"Search Result"}
                classNames={"!text-left"}
              />
            </div>
            <div className='grid w-full lg:w-[800px] grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4'>
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
        )}
        <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
          <div className='flex w-full lg:w-[800px]'>
            <SectionTitle
              text={"Popular News"}
              classNames={"!text-left"}
            />
          </div>
          <div className='grid w-full lg:w-[800px] grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-4'>
            <div className='lg:row-span-3 flex flex-col w-full gap-y-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-full'
              />
              <h5 className='text-sm text-gray-400'>23 October 2024</h5>
              <SectionTitle
                className={`!text-left !font-semibold !text-xl`}
                text={"Lorem ipsum dolor sit amet"}
              />
              <h4 className='text-gray-400 text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </h4>
            </div>
            <div className='lg:col-start-2 flex w-full gap-x-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-1/2'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
            <div className='flex w-full gap-x-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-1/2'
              />
              <div className='flex flex-col gap-y-2 w-fit'>
                <h5 className='text-sm text-gray-400'>23 October 2024</h5>
                <SectionTitle
                  className={`!text-left !font-semibold !text-lg`}
                  text={"Lorem ipsum dolor sit amet"}
                />
              </div>
            </div>
            <div className='flex w-full gap-x-2'>
              <img
                src='/card-placeholder.jpg'
                className='w-1/2'
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
      </SectionLayout>
    </div>
  )
}

export default List