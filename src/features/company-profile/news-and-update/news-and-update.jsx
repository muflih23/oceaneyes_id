import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Detail from './detail/detail';
import List from './list/list';

function NewsAndUpdate() {

  const [searchParams] = useSearchParams();
  const id =  searchParams.get('id');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  if(id) {
    return <Detail />
  } else {
    return <List />
  }
}

export default NewsAndUpdate