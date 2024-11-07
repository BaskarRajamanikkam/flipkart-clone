import React from 'react'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:keyword' element={<Products />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App