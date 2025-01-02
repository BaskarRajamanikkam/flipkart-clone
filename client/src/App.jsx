import React from 'react'

import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import Signup from './pages/User/Signup';
import Login from './pages/User/Login';
import Offers from './pages/Offers/Offers';
import Layout from './layouts/Layout';
import ProductDetail from './pages/ProductDetails/ProductDetail';
const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App