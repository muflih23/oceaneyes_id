import React, { useState } from 'react'

function useNewsData() {

  const [paginationFilter, setPaginationFilter] = useState({
    currentPage: 1,
    totalItems: 50,
  })

  const [searchFilter, setSearchFilter] = useState({
    keyword: '',
    currentPage: 0,
  })

  const onPageChange = (page) => {
    setPaginationFilter({
      ...paginationFilter,
      currentPage: page,
    })
    setSearchFilter({
      ...searchFilter,
      currentPage: page - 1,
    })
  }

  return {
    paginationFilter,
    setPaginationFilter,
    searchFilter,
    setSearchFilter,
    onPageChange,
  }
}

export default useNewsData