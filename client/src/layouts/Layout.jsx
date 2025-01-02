import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeHeader from '../components/Header/HomeHeader';
import AllHeader from '../components/Header/AllHeader';
import Footer from '../components/Footer/Footer';

const Layout = ({children}) => {
    const location = useLocation();

    const isHome = location.pathname === '/';

  return (
    <>
        {isHome ? <HomeHeader/>  :  <AllHeader />}
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout