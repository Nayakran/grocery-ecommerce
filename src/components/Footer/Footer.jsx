import React from 'react'
import Logo from '../../Image/FruitImage/CompanyLogo.png';

const Footer = () => {
    return (
        <div className='flex container border'>
            <div className=' w-[47%]'>
                <div>
                    <img
                        src={Logo}
                    />
                </div>
                <div>
                    <p className=' w-96 text-xs py-6'>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div>
                    <p className='font-bold'>Payment Accepted</p>
                </div>
            </div>
            <div className='flex gap-24 py-4'>
                <div>
                    <p className=' font-bold text-xl text-blue-300 underline'>Supported</p>
                    <p>Track Your Order</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Help Center</p>

                </div>
                <div>
                <p className='font-bold text-xl text-blue-300 underline'>Useful Links</p>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>News & Articles</p>
                </div>
                <div>
                    <p className='font-bold text-xl text-blue-300 underline'>Useful Links</p>
                    <p>Track Your Order</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Help Center</p>
                </div>
            </div>
        </div>
    )
}

export default Footer