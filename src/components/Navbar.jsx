import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between p-4 items-center z-[100] absolute w-full'>
      <Link to='/'>
      <h1 className="text-red-600 font-bold  text-2xl md:text-4xl cursor-pointer">
        NETFLIX
      </h1>
      </Link>
      <div>
      <Link to='login'>
      <button className='text-white pr-4'>Sing In</button>
     </Link>
      <Link to='singup'>
        <button className='bg-red-600 px-6 py-2 rounded text-white cursor-pointer'>Sing Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
