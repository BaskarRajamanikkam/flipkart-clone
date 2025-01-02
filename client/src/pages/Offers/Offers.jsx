import React from 'react';
import { categoryData } from '../../utils/data';

const Offers = () => {
  const data = categoryData.find((item)=>{
    return item.products;
  });

  return (
    <section className='max-w-[1440px] mx-auto bg-white mb-5'>
      <div className="flex flex-col items-center justify-center p-5 border-b">
        <h3 className='text-2xl font-semibold'>{data.category}</h3>
        <span className='capitalize text-gray-400'>{data.products.length} Items</span>
      </div>
      <div className="py-5">
        <div className="grid grid-cols-4 gap-x-5 gap-y-14">
        {data?.products?.map((item)=>(
            <div className="flex flex-col gap-1 items-center p-2">
              <img className="h-40 w-auto my-2  object-contain mb-2" src={item.image} alt="" />
              <h3 className='font-semibold'>{item.name}</h3>
              <span className='text-green-600'>&#8377; {item.price}</span>
              <p className='text-gray-500'>{item.brand}</p>
            </div>
        ))}
          </div>
      </div>
    </section>
  )
}

export default Offers