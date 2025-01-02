import React from 'react';
import image1 from '../../../assets/banner/1.webp';
import image2 from '../../../assets/banner/2.webp';
import image3 from '../../../assets/banner/3.webp';
import image4 from '../../../assets/banner/4.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      
    </div>
  )
}


const Banner = () => {
  const banner = [ image1, image2, image3, image4 ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <section className='rounded-sm shadow relative overflow-hidden h-[280px] bg-white max-w-[100rem] mx-auto'>
      <Slider {...settings}>
        {banner.map((item,index)=>(
          <img draggable='false' className=' w-full object-contain' key={index} src={item} alt="banner" />
        ))}
      </Slider>
    </section>
  )
}

export default Banner