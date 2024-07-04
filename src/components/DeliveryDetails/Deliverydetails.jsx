import React from 'react';
import PriceIcon from '../../Image/Delivery-svg-icon/Priceicon.svg';
import Freedelivery from '../../Image/Delivery-svg-icon/Freedelivery.svg';
import Deal from '../../Image/Delivery-svg-icon/Deal.svg';
import Wide from '../../Image/Delivery-svg-icon/Wide.svg';
import Easyreturns from '../../Image/Delivery-svg-icon/Easyreturns.svg';

const Deliverydetails = () => {
  return (
    <div className='flex container py-16 gap-14 justify-center'>
        <div>
            <img
            src={PriceIcon}
            alt='price-icon'
            width={150}
            height={100}
            />
            <p className='font-bold flex justify-center'>Best Price & Offers</p>
            <p className='flex justify-center'>Order $50 Or More</p>
        </div>
        <div>
        <img
            src={Freedelivery}
            alt='price-icon'
            width={150}
            height={100}
            />
            <p className='font-bold flex justify-center'>Free Delivary</p>
            <p className='flex justify-center'>24/7 amazing services</p>
        </div>
        <div>
        <img
            src={Deal}
            alt='Deal'
            width={150}
            height={100}
            />
            <p className='font-bold flex justify-center'>Great Daily Deal</p>
            <p className=' flex justify-center'>When you sign up</p>
        </div>
        <div>
        <img
            src={Wide}
            alt='Wide'
            width={150}
            height={100}
            />
            <p className='font-bold flex justify-center'>Wide Assortment</p>
            <p className='flex justify-center'>Wide Assortment</p>
        </div>
        <div>
        <img
            src={Easyreturns}
            alt='Easyreturns'
            width={150}
            height={100}
            />
            <p className='font-bold flex justify-center'>Easy Returns</p>
            <p className=' flex justify-center'>Within 30 days</p>
        </div>
    </div>
  )
}

export default Deliverydetails