import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
const Burger = () => {
    return (
        <div className='h-screen'>
            <h1 className='text-3xl font-medium text-center'>What Our Client Are <span className="text-orange-500">Saying</span></h1>
            <div className="flex justify-around items-center mt-12 mt-12">
                <div className="">
                    <img src="./src/assets/img/Rectangle 8.png" alt="" />
                </div>
                <div className="">
                    <div className="">
                        <p className='leading-8'> EFood has the most intriguing food order system in the <br />
                            country. UI in both their app and web Is very simple and <br />
                            easy to use, enhancing the UX. Their delivery men are also <br />
                            quite professional and knows the br neighborhood well. Till <br />
                            now I never had to guide them to my address for delivery; </p>
                    </div>
                    <div className="flex justify-start items-center mt-12 gap-32">
                        <div className="">
                            <h1 className='text-red-400 font-medium text-[20px]'>Anglina Jole</h1>
                            <p className='text-xs font-medium text-slate-400 mt-4'>Food lover</p>
                        </div>
                        <div className="flex justify-around gap-10">
                            <HiArrowLeft className='text-3xl text-slate-400' />
                            <HiArrowRight className='text-3xl text-red-400 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger