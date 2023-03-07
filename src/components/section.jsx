import React from 'react'
import { AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'

const Section = () => {
    return (
        <div className='flex justify-around items-center h-screen'>
            <div className="">
                <h1 className='text-3xl font-medium'>Download  Our <span className='text-orange-500'>Mobile App</span></h1>
                <p className='pt-6'>It's all at your fingertips -- the restaurants you love. Find <br />
                    the right food to suit your mood, and make the first bite <br />
                    last. Go ahead, download app and get 50% discount
                </p>
                <div className="flex mt-6 gap-8">
                    <button className="bg-black w-[120px] h-9 rounded-md flex justify-evenly items-center">
                        <AiFillApple className='text-white text-2xl' />
                        <p className='text-[9px] font-medium text-white '>Download on the <br />
                            <span className='text-base text-white leading-[9px] '>App Store</span></p>
                    </button>
                    <button className="bg-black w-[129px] h-9 rounded-md flex justify-evenly items-center">
                        <FaGooglePlay className='text-sky-400 text-2xl ' />
                        <p className='text-white text-[9px] font-medium'>GET IT ON <br />
                            <span className='text-base text-white leading-[9px]'>Google Play</span></p>
                    </button>
                </div>
            </div>
            <div className="">
                <img src="./src/img/Group 178tel.png" alt="" />
            </div>
        </div>
    )
}

export default Section