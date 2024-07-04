import React from 'react'
import Icecreame from '../../Image/FruitImage/icecrtem-removebg-preview 1.png'

const Banner = () => {
  return (
    <div className=' bg-blue-400 w-full h-96 flex justify-center'>
        <div>
            <img
            src={Icecreame}
            alt='ice-creame'
            width={580}
            height={100}
            />
        </div>
        <div className=' text-white py-12'>
            <div>
                <p className=' font-bold text-xl'>Deals of The Month</p>
            </div>
            <div>
                <p className='text-2xl py-6'>Buy 1 Ice Cream Tubs And Get ! Free</p>
            </div>
            <div>
                <p>
                is simply dummy text of the printing and typesetting
                </p>
                <p>
                industry. Lorem Ipsum has been the industry's standard 
                </p>
                
                
            </div>
        </div>

    </div>
  )
}

export default Banner