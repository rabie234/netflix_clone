import React from 'react'

import {Link} from 'react-router-dom'
export default function SingUp(){
    return(
        <>
        <div className="w-full h-screen">
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/95cf6a06-c74d-43b6-bcb2-955cf05fa687/LB-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
           <div className='absolute h-full w-full top-0 left-0  bg-black/50'></div>
           <div className='fixed py-24 px-4 w-full  z-50'>
            <div className='bg-black/75 max-w-[450px] mx-auto h-[600px] text-white'>
                <div className='max-w-[350px] mx-auto py-16'>
                    <h1 className=' text-3xl font-bold'>Sing Up</h1>
                    <form className='w-full flex flex-col py-4' >
                    <input className='rounded bg-gray-700 p-3 my-2' type="email" placeholder='Email'/>
                    <input className='rounded bg-gray-700 p-3 my-2' type="password" placeholder='Password' />
                    <button className='bg-red-600 rounded  py-3 my-6 font-bold'>SingUp</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
              <p><input className='mr-2' type="checkbox" />
                remember me</p>
                <p>Need help?</p>
              </div>
              <div className='py-8'>
                <p className='text-sm text-gray-600'>Already have an account <Link to='/login'><span className='text-white'>Sing In</span></Link></p>
              </div>
                </form>
                </div>
               
            </div>
           </div>
        </div>
        </>
    )
}