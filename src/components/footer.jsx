import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephoneInbound } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mt-24'>
            <div className="flex justify-around">
                <div className=''>
                    <img className='w-[100px] h-[30px]' src="./src/img/EFood.png" alt="" />
                    <ul className='mt-6'>
                        <div className="flex gap-3 items-center mt-1">
                            <CiLocationOn />
                            <li className='hover:text-orange-500 duration-150'><a href="/" className='flex'>Dhaka, Bangladesh</a></li>
                        </div>
                        <div className="flex gap-3 items-center mt-1">
                            <BsTelephoneInbound />
                            <li className='hover:text-orange-500 duration-150'><a href="/" className='flex'>0943833399</a></li>
                        </div>
                        <div className="flex gap-3 items-center mt-1">
                            <MdOutlineEmail />
                            <li className='hover:text-orange-500 duration-150'><a href="/" className='flex'>support@efood.com</a></li>
                        </div>
                    </ul>
                    <div className="flex items-center gap-6 mt-4">
                        <FaFacebookF className='w-8 h-8 rounded-full bg-slate-300 p-2' />
                        <IoLogoTwitter className='w-8 h-8 rounded-full bg-slate-300 p-2' />
                        <AiFillInstagram className='w-8 h-8 rounded-full bg-slate-300 p-2' />
                        <FaTelegramPlane className='w-8 h-8 rounded-full bg-slate-300 p-2' />
                    </div>
                </div>
                <div className='mt-6'>
                    <ul>
                        <li className='mt-2 hover:text-orange-500 duration-150'><a href='/'>Service</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'><a href='/'>How it works</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'><a href='/'>Home delivery</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'><a href='/'>Prducts</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'><a href='/'>Menu</a> </li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <ul>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">Company</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">About Us</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">News</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">Our trusted partner</a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">New users FAQ</a> </li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <ul>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/"> supports </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/"> Help center </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/"> Feedback </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/"> Cotact us </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/"> terms conditins </a> </li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <ul>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">Resources </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">Download app </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">Blog </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">What’s new </a> </li>
                        <li className='mt-2 hover:text-orange-500 duration-150'> <a href="/">Sitemap </a> </li>
                    </ul>
                </div>
            </div>
            <hr className='h-[2px] bg-slate-400 ml-6 mt-5' />
            <div className="flex justify-between h-16 items-center w-[90%] ml-12">
                <a href="/" className='nm'>© 2021 EFood - All rights reserved.</a>
                <div className="flex gap-10">
                    <p className='hover:text-slate-300 duration-150'> <a href='/'>Privacy </a></p>
                    <p className='hover:text-slate-300 duration-150'> <a href='/'>Security </a></p>
                    <p className='hover:text-slate-300 duration-150'> <a href='/'>Terms </a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer