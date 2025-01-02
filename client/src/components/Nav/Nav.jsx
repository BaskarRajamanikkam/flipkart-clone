import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Nav = () => {
  return (
    <section className='bg-white pt-14 my-2 shadow '>
        <div className="max-w-7xl h-10 flex items-center mx-auto px-20">
            <ul className='flex items-center justify-between gap-12'>
                <li>
                    <button className='relative flex p-1 items-center gap-1.5 group hover:text-blue-500'>
                        <span className='text-sm font-medium'>Electronics</span>
                        <IoIosArrowDown className='text-xs mt-0.5 group-hover:rotate-180 transition ' />
                    </button>
                </li>
                <li>
                    <button className='relative flex p-1 items-center gap-1.5 group hover:text-blue-500'>
                        <span className='text-sm font-medium'>TVs & Appliances</span>
                        <IoIosArrowDown className='text-xs mt-0.5 group-hover:rotate-180 transition ' />
                    </button>
                </li>
                <li>
                    <button className='relative flex p-1 items-center gap-1.5 group hover:text-blue-500'>
                        <span className='text-sm font-medium'>Men</span>
                        <IoIosArrowDown className='text-xs mt-0.5 group-hover:rotate-180 transition ' />
                    </button>
                </li>
                <li>
                    <button className='relative flex p-1 items-center gap-1.5 group hover:text-blue-500'>
                        <span className='text-sm font-medium'>Women</span>
                        <IoIosArrowDown className='text-xs mt-0.5 group-hover:rotate-180 transition ' />
                    </button>
                </li>
                <li>
                    <button className='relative flex p-1 items-center gap-1.5 group hover:text-blue-500'>
                        <span className='text-sm font-medium'>Baby & Kids</span>
                        <IoIosArrowDown className='text-xs mt-0.5 group-hover:rotate-180 transition ' />
                    </button>
                </li>
                <li>
                    <button className='relative flex p-1 items-center gap-1.5 group hover:text-blue-500'>
                        <span className='text-sm font-medium'>Home & Furniture</span>
                        <IoIosArrowDown className='text-xs mt-0.5 group-hover:rotate-180 transition ' />
                    </button>
                </li>
                <li>
                    <button className='relative flex p-1 items-center gap-1.5 group hover:text-blue-500'>
                        <span className='text-sm font-medium'>Sports,Books & More </span>
                        <IoIosArrowDown className='text-xs mt-0.5 group-hover:rotate-180 transition ' />
                    </button>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Nav