import React from 'react';
import mobiles from '../../assets/category/phone.png';
import fashion from '../../assets/category/fashion.png';
import electronics from '../../assets/category/electronics.png';
import home from '../../assets/category/home.png';
import travel from '../../assets/category/travel.png';
import appliances from '../../assets/category/appliances.png';
import furniture from '../../assets/category/furniture.png';
import beauty from '../../assets/category/beauty.png';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import CategoryBox from './CategoryBox';



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

const Category = () => {

    const [params,setParams] = useSearchParams();
    const location = useLocation();
    const category = params?.get('category');
    const isMainPage = location !== '/';

    if(!isMainPage){
        return null;
    }

  return (
    <section className="max-w-[100rem] px-20 mx-auto pt-20  shadow overflow-hidden bg-[#FFF]">
        <div className="flex items-center justify-between">
            {catNav.map((item,index)=>(
                <CategoryBox
                    key={index}
                    label={item.name}
                    icon={item.icon}
                    selected={category === item.name}
                />
            ))}
        </div>
    </section>
  )
}

export default Category