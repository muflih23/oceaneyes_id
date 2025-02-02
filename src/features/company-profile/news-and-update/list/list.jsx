import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { Input, Pagination } from 'antd'
import SearchInput from '../../../../components/atoms/input/input'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useNewsData from '../hook/useNewsData'
import HeroTitle from '../../../../components/atoms/hero-title'
import { formatDate } from '../../../../utils/dateFormat'

function List() {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const {
    paginationFilter,
    onPageChange,
    spotlightData,
    listData,
    setKeyword,
    keyword,
    searchResultFilter,
    setSearchResultFilter,
    searchResultPagination,
    onSearchResultPageChange,
    searchResultData,
  } = useNewsData()

  return (
    <div className='flex flex-col w-full'>
      {!searchParams.get('keyword') && (
        <SectionLayout classNames={`!p-0 bg-[url('https://storage.oceaneyes.id/oceaneyes/web/news_header.webp')] bg-cover bg-center bg-no-repeat`}>
          <div className="flex pt-[86px] bg-black bg-opacity-50 items-center justify-between w-full h-[calc(100vh-86px)] lg:min-h-[90vh] relative">
            <div className='p-4 lg:p-10 w-full h-full flex items-center'>
              <div className="flex flex-col gap-y-2">
                <HeroTitle
                  className={`!flex !text-white drop-shadow-lg`}
                  text={"Our Activities"}
                />
                <div className='flex justify-center items-center w-full w-[300px] lg:w-[600px]'>
                  <SearchInput
                    className={`!w-[300px] lg:!w-[600px]`}
                    onChange={(e) => setKeyword(e.target.value)}
                    onSearch={() => setSearchResultFilter({
                      ...searchResultFilter,
                      page: 1,
                      search: keyword,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      )}
      <SectionLayout classNames={`${searchParams.get('keyword') ? `!pt-[86px]` : ``} pb-10 w-full min-h-[70vh] items-center`}>
        {searchResultFilter.search.length > 0 && (
          <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
            <div className='flex w-full lg:w-[960px]'>
              <SectionTitle
                text={`Search Result for "${searchResultFilter.search}"`}
                classNames={"!text-left"}
              />
            </div>
            <div className='grid w-full lg:w-[960px] grid-cols-1 lg:grid-cols-3 gap-4'>
              {
                searchResultData.map((result, index) => (
                  <div className='flex flex-col w-full gap-y-2'>
                    <img
                      src={result.imageUrl}
                      className='w-full'
                    />
                    <div className='flex flex-col gap-y-2 w-fit'>
                      <h5 className='text-sm text-gray-400'>{formatDate(result.createdAt)}</h5>
                      <SectionTitle
                        className={`!text-left !font-semibold !text-lg`}
                        text={result.title}
                      />
                    </div>
                  </div>
                ))
              }
            </div>
            <Pagination
              current={searchResultPagination.currentPage}
              total={searchResultPagination.totalItems}
              onChange={onSearchResultPageChange}
            />
          </div>
        )}
        {
          spotlightData.length > 0 && (
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
                    src={spotlightData[0].imageUrl}
                    className='w-full'
                  />
                  <h5 className='text-sm text-gray-400'>{formatDate(spotlightData[0].createdAt)}</h5>
                  <SectionTitle
                    className={`!text-left !font-semibold !text-xl`}
                    text={spotlightData[0].title}
                  />
                  <h4 className='text-gray-400 text-base font-normal'>{spotlightData[0].shortDesc}</h4>
                </div>
                <div className='lg:col-start-2 flex w-full gap-x-2'>
                  <img
                    src={listData[0].imageUrl}
                    className='w-1/2'
                  />
                  <div className='flex flex-col gap-y-2 w-fit'>
                    <h5 className='text-sm text-gray-400'>{formatDate(listData[0].createdAt)}</h5>
                    <SectionTitle
                      className={`!text-left !font-semibold !text-lg`}
                      text={listData[0].title}
                    />
                  </div>
                </div>
                {
                  listData.length > 1 && (
                    <div className='flex w-full gap-x-2'>
                      <img
                        src={listData[1].imageUrl}
                        className='w-1/2'
                      />
                      <div className='flex flex-col gap-y-2 w-fit'>
                        <h5 className='text-sm text-gray-400'>{formatDate(listData[1].createdAt)}</h5>
                        <SectionTitle
                          className={`!text-left !font-semibold !text-lg`}
                          text={listData[1].title}
                        />
                      </div>
                    </div>
                  )
                }
                {
                  listData.length > 2 && (
                    <div className='flex w-full gap-x-2'>
                      <img
                        src={listData[2].imageUrl}
                        className='w-1/2'
                      />
                      <div className='flex flex-col gap-y-2 w-fit'>
                        <h5 className='text-sm text-gray-400'>{formatDate(listData[2].createdAt)}</h5>
                        <SectionTitle
                          className={`!text-left !font-semibold !text-lg`}
                          text={listData[2].title}
                        />
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
        <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
          <div className='flex w-full lg:w-[960px]'>
            <SectionTitle
              text={"Latest News"}
              classNames={"!text-left"}
            />
          </div>
          <div className='grid w-full lg:w-[960px] grid-cols-1 lg:grid-cols-3 gap-4'>
            {
              listData.map((article, index) => (
                <div className='flex flex-col w-full gap-y-2'>
                  <img
                    src={article.imageUrl}
                    className='w-full'
                  />
                  <div className='flex flex-col gap-y-2 w-fit'>
                    <h5 className='text-sm text-gray-400'>{formatDate(article.createdAt)}</h5>
                    <SectionTitle
                      className={`!text-left !font-semibold !text-lg`}
                      text={article.title}
                    />
                  </div>
                </div>
              ))
            }
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