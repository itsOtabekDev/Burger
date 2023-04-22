import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-around pt-5'>
            <a href="/"><img className='w-[100px] h-[30px]' src="./img/EFood.png" alt=""></img></a>
            <div className="flex justify-around w-1/1 items-center">
                <ul className='flex justify-between w-64'>
                    <a href="/"><li className='hover:text-red-600 duration-150 hover:scale-105' >Home</li></a>
                    <a href="/"><li className='hover:text-red-600 duration-150 hover:scale-105'>Service</li></a>
                    <a href="/"><li className='hover:text-red-600 duration-150 hover:scale-105'>Top cities</li></a>
                    <Link to='/shop'><li className='hover:text-red-600 duration-150 hover:scale-105'>shop</li></Link>
                </ul>
                <a href=""><i class="fa-solid fa-magnifying-glass mt-1 ml-6"></i></a>
                <ul>
                    <li>
                        <Link to='/shop'><i class="fa-solid fa-cart-shopping mt-1 ml-[40px]"></i></Link>
                    </li>
                </ul>
                <button className='bg-orange-400 text-white w-[100px] h-[40px] ml-[65px] rounded-[5px]'>Sign Up</button>
            </div >
        </nav >
    )
}

export default Navbar