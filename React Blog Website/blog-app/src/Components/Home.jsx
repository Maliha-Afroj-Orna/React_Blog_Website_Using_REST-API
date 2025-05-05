import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
import UseFetch from '../UseFetch';

const Home = () => {
  const { data: blogs, isPending, error } = UseFetch('http://localhost:3000/blogs');
 
  return (
    <div className='home'>
      { error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />} 
    </div>
  )
}

export default Home