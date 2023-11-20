import React from 'react'

const Movie = ({item}) => {
    const {backdrop_path,title} = item;
  return (
    <div className='w-[160px] md:w-[200px] inline-block cursor-pointer relative p-2 '>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
    <div className='absolute top-0 w-full left-0 h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
      <p className='font-bold text-xs md:text-sm whitespace-normal flex justify-center items-center h-full w-full'>{title}</p>
       </div>
</div>
  )
}

export default Movie
