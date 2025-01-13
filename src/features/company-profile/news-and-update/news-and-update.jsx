import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Result from './result/result';
import Detail from './detail/detail';
import List from './list/list';

function NewsAndUpdate() {

  const [searchParams] = useSearchParams();
  const id =  searchParams.get('id');
  
  if(id) {
    return <Detail />
  } else {
    return <List />
  }
}

export default NewsAndUpdate