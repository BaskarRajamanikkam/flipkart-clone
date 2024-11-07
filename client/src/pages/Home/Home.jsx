import React from 'react'
import MetaData from '../../components/Layouts/MetaData'
import Category from '../../components/Categories/Category'
import Banner from './Banner/Banner'
import DealSlider from './DealSlider/DealSlider'
import Ads from './Ads/Ads'
import Cards from './Cards/Cards'

const Home = () => {
  return (
    <>
        <MetaData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
        <Category />
        <main className="mt-5">
            <Banner />
            <DealSlider title="Premium Products" />
            <DealSlider title="Best of Electronics" />
            <Ads />
            <Cards/>
            <DealSlider title="Best of Electronics" />
        </main>
    </>
  )
}

export default Home