import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { IoMdPizza } from 'react-icons/io'
import { BiCoffeeTogo } from 'react-icons/bi'
import { TbToolsKitchen2 } from 'react-icons/tb'

const Card = () => {
    return (
        <div className='h-creen'>
            <h1 className='text-3xl text-center '>Our popular <span className='text-red-500'>Category</span></h1>
            <div className="ml-[11.5%] mt-24">
                <Swiper slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide className="">
                        <div className="w-52">
                            <div className="w-[200px] bg-slate-50 rounded-xl h-16 flex items-center ml-1 hover:bg-orange-400 hover:text-white transition-all">
                                <i class="fa-solid fa-burger text-4xl ml-10"></i>
                                <h1 className="text-lg text-center ml-4">Burger</h1>
                            </div>
                            <div className="text-center rounded-xl border-2 mt-11 h-[288px]">
                                <img className="ml-7" src="./src/img/item_01-480x480 1.png" alt="" />
                                <a href=""><p>Cheeseburger With Salad</p></a>
                                <a href=""><h3 className="mt-3">$18.00</h3></a>
                                <button className="bg-orange-400 w-24 h-8 mt-4 rounded-sm text-white">Add to Cart</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="w-52">
                            <div className="w-[200px] bg-slate-50 rounded-xl h-16 flex items-center ml-1 hover:bg-orange-400 hover:text-white transition-all">
                                <IoMdPizza className="text-4xl ml-10" />
                                <h1 className="text-lg text-center ml-4">Pizza</h1>
                            </div>
                            <div className="text-center rounded-xl border-2 mt-11 h-[288px]">
                                <img className="ml-7" src="./src/img/item_01-480x480 1.png" alt="" />
                                <a href=""><p>Cheeseburger With Salad</p></a>
                                <a href=""><h3 className="mt-3">$18.00</h3></a>
                                <button className="bg-orange-400 w-24 h-8 mt-4 rounded-sm text-white">Add to Cart</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="w-52">
                            <div className="w-[200px] bg-slate-50 rounded-xl h-16 flex items-center ml-1 hover:bg-orange-400 hover:text-white transition-all">
                                <BiCoffeeTogo class="fa-solid fa-burger text-4xl ml-10" />
                                <h1 className="text-lg text-center ml-4">sandwich</h1>
                            </div>
                            <div className="text-center rounded-xl border-2 mt-11 h-[288px]">
                                <img className="ml-7" src="./src/img/item_01-480x480 1.png" alt="" />
                                <a href=""><p>Cheeseburger With Salad</p></a>
                                <a href=""><h3 className="mt-3">$18.00</h3></a>
                                <button className="bg-orange-400 w-24 h-8 mt-4 rounded-sm text-white">Add to Cart</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="w-52">
                            <div className="w-[200px] bg-slate-50 rounded-xl h-16 flex items-center ml-1 hover:bg-orange-400 hover:text-white transition-all">
                                <TbToolsKitchen2 class="fa-solid fa-burger text-4xl ml-10" />
                                <h1 className="text-lg text-center ml-4">Set Menu</h1>
                            </div>
                            <div className="text-center rounded-xl border-2 mt-11 h-[288px]">
                                <img className="ml-7" src="./src/img/item_01-480x480 1.png" alt="" />
                                <a href=""><p>Cheeseburger With Salad</p></a>
                                <a href=""><h3 className="mt-3">$18.00</h3></a>
                                <button className="bg-orange-400 w-24 h-8 mt-4 rounded-sm text-white">Add to Cart</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="w-52">
                            <div className="w-[200px] bg-slate-50 rounded-xl h-16 flex items-center ml-1 hover:bg-orange-400 hover:text-white transition-all">
                                <i class="fa-solid fa-burger text-4xl ml-10"></i>
                                <h1 className="text-lg text-center ml-4">Burger</h1>
                            </div>
                            <div className="text-center rounded-xl border-2 mt-11 h-[288px]">
                                <img className="ml-7" src="./src/img/item_01-480x480 1.png" alt="" />
                                <a href=""><p>Cheeseburger With Salad</p></a>
                                <a href=""><h3 className="mt-3">$18.00</h3></a>
                                <button className="bg-orange-400 w-24 h-8 mt-4 rounded-sm text-white">Add to Cart</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="w-52">
                            <div className="w-[200px] bg-slate-50 rounded-xl h-16 flex items-center ml-1 hover:bg-orange-400 hover:text-white transition-all">
                                <BiCoffeeTogo class="fa-solid fa-burger text-4xl ml-10" />
                                <h1 className="text-lg text-center ml-4">Burger</h1>
                            </div>
                            <div className="text-center rounded-xl border-2 mt-11 h-[288px]">
                                <img className="ml-7" src="./src/img/item_01-480x480 1.png" alt="" />
                                <a href=""><p>Cheeseburger With Salad</p></a>
                                <a href=""><h3 className="mt-3">$18.00</h3></a>
                                <button className="bg-orange-400 w-24 h-8 mt-4 rounded-sm text-white">Add to Cart</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Card