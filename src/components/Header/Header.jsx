
import React from 'react'
import Logo from '../../Image/FruitImage/CompanyLogo.png';
import { MdSupportAgent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Navbar from '../Navbar/Navbar';





const Header = () => {
    return (
        <div className=' container'>
            {/* Logo ,support and Profile */}
            <div className=' flex justify-between'>
                <div>
                    <img
                        src={Logo}
                    />
                </div>
                <div className=' flex gap-7'>
                    <div className='flex py-4 gap-2'>
                        <div>
                            <MdSupportAgent color='#00B2EA' size={30} />
                        </div>
                        <div className=' text-blue-300'>
                            Support
                        </div>
                    </div>
                    <div className='flex py-4 gap-2'>
                        <div><CgProfile color='#00B2EA' size={30} /></div>
                        <div className='text-blue-300'> Account</div>
                    </div>
                </div>
            </div>
            {/* navbar */}
            <div className='flex justify-between'>
                <div>
                    <Navbar/>
                </div>
                <div className='flex gap-7'>
                    <div className='flex items-center'>
                        <div className='relative'>
                            <input className='w-80 h-10 border border-blue-300 px-3' />
                            <IoIosSearch size={30} className='absolute right-2 top-2 text-blue-300 cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div><FaRegHeart color='#00B2EA' size={30} />
                        </div>
                        <div className='text-blue-300 font-semibold'>Add To Wishlist</div>
                    </div>
                    <div className='flex gap-3'>
                        <div><IoCartOutline color='#00B2EA' size={30} />
                        </div>
                        <div className='text-blue-300 font-semibold'>Cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header