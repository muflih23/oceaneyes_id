import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { Input, Pagination } from 'antd'
import SearchInput from '../../../../components/atoms/input/input'
import { useSearchParams } from 'react-router-dom'
import useNewsData from '../hook/useNewsData'
import HeroTitle from '../../../../components/atoms/hero-title'

function List() {

  const [searchParams] = useSearchParams();

  const {
    paginationFilter,
    onPageChange,
  } = useNewsData()

  return (
    <div className='flex flex-col w-full'>
      {!searchParams.get('keyword') && (
        <SectionLayout classNames={`!pt-[86px] pb-0`}>
          <div className="flex items-center justify-between w-full h-[calc(100vh-86px)] lg:h-[70vh] rounded-3xl p-4 lg:p-10 bg-[url('../public/fnavi.jpg')] bg-cover bg-no-repeat relative">
            <div className="flex w-fit flex-col gap-y-2">
              <HeroTitle
                className={`!flex !text-white drop-shadow-lg`}
                text={"Our Activities"}
              />
              <div className='flex justify-center items-center w-full lg:w-[600px]'>
                <SearchInput
                  onChange={() => { }}
                  onSearch={() => { }}
                />
              </div>
            </div>
          </div>
        </SectionLayout>
      )}
      <SectionLayout classNames={`${searchParams.get('keyword') ? `!pt-[86px]` : ``} pb-10 w-full min-h-[70vh] items-center`}>
        {searchParams.get('keyword') && (
          <div className='flex justify-center items-center w-full lg:w-[960px]'>
            <SearchInput
              onChange={() => { }}
              onSearch={() => { }}
            />
          </div>
        )}
        {searchParams.get('keyword') && (
          <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
            <div className='flex w-full lg:w-[960px]'>
              <SectionTitle
                text={"Search Result"}
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
            <Pagination
              current={paginationFilter.currentPage}
              total={paginationFilter.totalItems}
              onChange={onPageChange}
            />
          </div>
        )}
        <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
          <div className='flex w-full lg:w-[960px]'>
            <SectionTitle
              text={"Popular News"}
              classNames={"!text-left"}
            />
          </div>
          <div className='grid w-full lg:w-[960px] grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-4'>
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
          <Pagination
            current={paginationFilter.currentPage}
            total={paginationFilter.totalItems}
            onChange={onPageChange}
          />
        </div>
      </SectionLayout>
    </div>
  )
}

export default List