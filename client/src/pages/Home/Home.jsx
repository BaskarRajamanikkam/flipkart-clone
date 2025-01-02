import React, { useEffect, useState } from 'react';
import MetaData from '../../components/Layouts/MetaData';
import Category from '../../components/Categories/Category';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import Ads from './Ads/Ads';
import Cards from './Cards/Cards';
import productApi from '../../api/productApi';
import { useDispatch, useSelector }from 'react-redux';
import { setProducts } from '../../redux/features/ProductSlice';
import { useLocation } from 'react-router-dom';
import { categoryData } from '../../utils/data';



const Home = () => {
 
  const dispatch = useDispatch();



  return (
    <>
        <MetaData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
        <main className="mt-3">
            <Banner />
            {categoryData.map((category)=>(
              <DealSlider key={category.category} title={category.category} product={category.products} />
            ))}
           
            <Ads />
            <Cards/>
        </main>
    </>
  )
}

export default Home