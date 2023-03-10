import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-evenly py-[100px] items-center ml-[95px] h-screen'>
            <div className="">
                <h1 className='text-6xl leading-tight font-sans'>super fast <span className='text-red-500'>Food <br />
                    delivery</span> service</h1>
                <p className='pt-4'>We provide super fast-delivery service. Let’s use our <br />
                    services right now and get discounts of up to 50%</p>
                <div className="flex items-center gap-5 mt-7">
                    <button className='bg-orange-400 text-white w-[120px] h-[40px] rounded-[5px]'>Explore Food</button>
                    <button className='border-b-4 w-[120px] h-[40px] duration-150 hover:border-none hover:text-white hover:rounded-[5px] hover:bg-orange-400'>Download App</button>
                </div>
            </div>
            <div className="">
                <img className='w-[509px] hover:scale-105 duration-150' src="./src/assets/img/Scooter Guy.png" alt="" />
            </div>
        </header>
    )
}

export default Header