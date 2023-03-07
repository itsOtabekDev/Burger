import React from 'react'

const Wrapper = () => {
    return (
        <div className="wrapper flex justify-evenly items-center h-screen">
            <div className="">
                <img src="./src/img/food delivery 4.png" alt="" />
            </div>
            <div className="">
                <h1 className="text-3xl"><span className="text-red-500">Stay</span> at home, we will <br />
                    Provide <span className="text-red-500">good food</span></h1>
                <p className="font-serif mt-4">We provide tasty food and superfast delivery at <br />
                    your home.  Let’s use our services right now and <br />
                    get discounts of up to 50%.</p>
                <div className="flex-row w-65">
                    <div className="flex justify-evenly mt-6 gap-6 mr-14 items-center">
                        <i class="fa-sharp fa-regular fa-clock text-orange-500"></i>
                        <a href="">fasted delivery in 30 Minutes</a>
                    </div>
                    <div className="flex justify-evenly mt-6 gap-6 mr-32 items-center">
                        <i class="fa-solid fa-truck text-sky-300"></i>
                        <a href="">300+ delivery  men </a>
                    </div>
                    <div className="flex justify-evenly mt-6 gap-6 mr-16 items-center">
                        <i class="fa-solid fa-shop text-orange-500"></i>
                        <a href="">500+ restaurant & cafe shop</a>
                    </div>
                </div>
                <button className="bg-orange-400 w-32 h-11 mt-6 text-white rounded-t-[30px] rounded-l-[30px]">See more</button>
            </div>
        </div>
    )
}

export default Wrapper