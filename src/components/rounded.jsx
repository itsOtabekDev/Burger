import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Rounded = () => {
    return (
        <div className='flex justify-center'>
            <div className="w-4/5 h-64 rounded-[15px] bg-orange-500 flex-row items-center text-center">
                <h1 className='text-white text-3xl mt-12'>Subscribe to get the Latest Offer</h1>
                <p className='text-white font-light mt-3 text-xs'>Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                <div className="mt-6">
                    <input className='rounded-full w-1/2 h-16 mt-4 pl-6' type="text" placeholder='Enter your email addres' />
                    <button className='absolute ml-[-155px] pl-5 mt-6 h-12 w-36 bg-orange-500 rounded-full text-white hover:bg-orange-400 focus:outline-none focus:ring focus:ring-violet-300 duration-150'> <FaTelegramPlane className='absolute mt-1' /> Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Rounded