import React from 'react';
import Apple from '../../Image/FruitImage/apple.png';
import Banana from '../../Image/FruitImage/banana.png';
import Lemon from '../../Image/FruitImage/lemon.png';
import Mixfruit from '../../Image/FruitImage/Mix-Fruits.png';
import Chocolatecookies from '../../Image/FruitImage/chocholate cookies.png';
import Chocolatespread from '../../Image/FruitImage/chocholate Spread.png';
import Freshbread from '../../Image/FruitImage/fresh-Bread.png';
import Cookingoil from '../../Image/FruitImage/Cookingoil.png';
import { IoCartOutline } from "react-icons/io5";

// Example product card data in JSON format
const productcardData = [
  {
    id: 1,
    name: 'Apple',
    image:Apple,
    price: 100,
  },
  {
    id: 2,
    name: 'Banana',
    image: Banana,
    price: 150,
  },
  {
    id: 3,
    name: 'Lemon',
    image: Lemon,
    price: 120,
  },
  {
    id: 3,
    name: 'Mixfruit',
    image: Mixfruit,
    price: 120,
  },
  {
    id: 3,
    name: 'Chocolatecookies',
    image: Chocolatecookies,
    price: 120,
  },
  {
    id: 3,
    name: 'Chocolatespread',
    image: Chocolatespread,
    price: 120,
  }
];

const Productcard = () => {
  return (
    <div className="container flex flex-wrap items-center justify-center gap-9 py-16">
      {productcardData.map((product) => (
        <div key={product.id} className="bg-white w-96 h-[30rem] p-4 shadow-md rounded-md">
          <img src={product.image} alt={product.name} className=" object-cover mb-2" />
          <div className="text-lg font-bold flex justify-center">{product.name}</div>
          <div className="text-gray-600 flex justify-center">${product.price}</div>
          {/* <div className='flex justify-center'>
            <button>Add To Cart</button>
          </div> */}
          <div className='flex items-center justify-center py-4'>
                        <div className='relative bg-blue-300 w-36 h-11 flex items-center justify-center'>
                            
                            {/* <IoIosSearch size={30} className='absolute right-2 top-2 text-blue-300 cursor-pointer' /> */}
                            <IoCartOutline className='absolute right-[7.4rem]  top-[0.8rem] cursor-pointer' color='white'/>

                            <button className='bg-blue-300 flex'>Add To Cart</button>
                            {/* <IoCartOutline className='absolute right-[8.5rem] top-2 cursor-pointer' color='white'/> */}
                        </div>
                    </div>
        </div>
      ))}
    </div>
  );
}

export default Productcard;
