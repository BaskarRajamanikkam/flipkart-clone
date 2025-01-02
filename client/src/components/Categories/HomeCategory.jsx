import React from 'react';
import mobiles from '../../assets/category/phone.png';
import fashion from '../../assets/category/fashion.png';
import electronics from '../../assets/category/electronics.png';
import home from '../../assets/category/home.png';
import travel from '../../assets/category/travel.png';
import appliances from '../../assets/category/appliances.png';
import furniture from '../../assets/category/furniture.png';
import beauty from '../../assets/category/beauty.png';
import HomeCategoryBox from './HomeCategoryBox';
import { useLocation, useSearchParams } from 'react-router-dom';


const catNav = [
    {
        name: "Mobiles",
        icon: mobiles,
    },
    {
        name: "Fashion",
        icon: fashion,
    },
    {
        name: "Electronics",
        icon: electronics,
    },
    {
        name: "Home",
        icon: home,
    },
    {
        name: "Travel",
        icon: travel,
    },
    {
        name: "Appliances",
        icon: appliances,
    },
    {
        name: "Furniture",
        icon: furniture,
    },
    {
        name: "Beauty,Toys & more",
        icon: beauty,
    },
]


const HomeCategory = () => {
    const [params,setParams] = useSearchParams();
    const location = useLocation();
    const category = params?.get('category');
    const isMainPage = location !== '/';
    if(!isMainPage){
        return null;
    }
  return (
    <section className='mt-[4.5rem] max-w-[100rem] px-20 mx-auto shadow overflow-hidden bg-white'>
        <div className="flex items-center justify-between">
            {catNav.map((item,index)=>(
                <HomeCategoryBox key={index} label={item.name} icon={item.icon} selected={category === item.name} />
            ))}
        </div>
    </section>
  )
}

export default HomeCategory