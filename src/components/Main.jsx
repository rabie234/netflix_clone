import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';

const Main = () => {
    const [movies,setmovies] = useState([])
    const movie = movies[Math.floor(Math.random()*movies.length)];
    const  {data,isLoading,error} =  
    useFetch('/movie/popular?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US');

    const turnecateString=(str,num)=>{
        if(str?.length>num){
            return str.slice(0,num)+'...';
        }else{
            return str;
        }
    }

    useEffect(()=>{
       data && setmovies(data.results);
    },[data])
    
    useEffect(()=>{console.log(movies)},[movies])

    useEffect(()=>{console.log(isLoading)},[isLoading])

    
if(isLoading ){
    return(<h3>Loading...</h3>)
}

return (
    <div className='w-full h-[550px] text-white relative'>
        
        <div className="w-full h-full">
            <div className='w-full h-full bg-gradient-to-r from-black absolute'></div>

         <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="" /> 
       <div className='absolute w-full top-[30%] p-4 md:p-8'>
        <h1 className='text-2xl md:text-3xl font-bold '>{movie?.title}</h1>
       <div className='my-4'>
        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
        <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm '>Releast: {movie?.release_date}</p>
        <p className='w-full lg:max-w-[50%] text-gray-200 md:max-w-[70%] xl:max-w-[35%]'>{turnecateString(movie?.overview,100) }</p>
       </div>
       
        </div>
    </div>
  )


}

export default Main
