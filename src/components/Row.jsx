import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import Movie from './Movie';

const Row = ({title,fetchUrl}) => {

    const [movies,setMovies]  = useState([]);
    const  {data,isLoading,error} =   useFetch(fetchUrl);


    useEffect(()=>{
      data &&  setMovies(data.results);
        console.log(movies)
    },[data])


  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4 text-center md:px-10'>{title}</h2>
      <div className="relative flex items-center group  ">
         <div className='absolute  left-0 w-10 hidden group-hover:flex justify-center cursor-pointer align-middle text-center opacity-50 hover:opacity-100 h-full  bg-gray-300 text-black z-50'><p>next</p></div>
        <div className='w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ' id={"slider"}>
        {movies && movies.map((item,id)=>{
      
            return(
              <Movie  key={id} item={item}/>
            )
        })}
        </div>
<div className='absolute  right-0 w-10 h-full group-hover:flex justify-center cursor-pointer align-middle text-center hidden opacity-50 hover:opacity-100   bg-gray-300 text-black z-50'><p className=' flex align-middle text-center justify-center h-full'>prev</p></div>
      </div>
    </>
  )
}

export default Row
