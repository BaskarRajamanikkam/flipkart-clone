import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import watch from "../../../assets/products/watch.webp";
import offer from "../../../assets/products/offer.webp";
import { getRandomProducts } from "../../../utils/functions";
import { offerProducts } from "../../../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DealSlider.css';

const products = [
    { id: 1, image: 'path-to-image/tv.png', title: 'Best of QLED TVs', price: '₹7,000 Off on Exch*' },
    { id: 2, image: 'path-to-image/earphones.png', title: 'Best-selling Earphones', price: 'From ₹699' },
    { id: 3, image: 'path-to-image/watch.png', title: 'Samsung Watch 6 LTE', price: 'From ₹17,499*' },
    { id: 4, image: 'path-to-image/gamepad.png', title: 'Gamepads', price: 'From ₹699' },
    { id: 5, image: 'path-to-image/ring-light.png', title: 'Flash Ring Lights', price: 'From ₹999' },
    { id: 6, image: 'path-to-image/speaker.png', title: 'Speakers & Soundbars', price: 'Shop Now' },
    { id: 7, image: 'path-to-image/ring-light.png', title: 'Flash Ring Lights', price: 'From ₹999' },
    { id: 8, image: 'path-to-image/speaker.png', title: 'Speakers & Soundbars', price: 'Shop Now' },
  ];
const PrevArrow = ({ onClick, visible }) => (
    <button
      onClick={onClick}
      className={`absolute -left-2 top-1/2 transform -translate-y-1/2 h-20 rounded-sm bg-gray-100 p-2  shadow-lg z-10  ${!visible && 'hidden'}`}
    >
      <IoIosArrowBack size={20} className="text-gray-600" />
    </button>
  );
  
  // Custom Next Arrow
  const NextArrow = ({ onClick, visible }) => (
    <button
      onClick={onClick}
      className={`absolute -right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 h-20  rounded-sm shadow-lg z-10  ${!visible && 'hidden'}`}
    >
      <IoIosArrowForward size={20} className="text-gray-600" />
    </button>
  );

const DealSlider = ({ title }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
      dots: false,
      infinite: false, 
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
      nextArrow: <NextArrow visible={currentSlide < products.length - 5} />, // Show next if not at last slide
      prevArrow: <PrevArrow visible={currentSlide > 0} />, // Show prev if not at first slide
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 2 },
        },
      ],
    };
  return (
    <section className="max-w-[100rem]  h-full mx-auto mt-5  rounded-sm  relative mb-4">
      <div className="w-full bg-white ">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-xl font-medium">{title}</h3>
          <Link className="text-white bg-indigo-500 rounded-full p-1">
            <IoIosArrowForward />
          </Link>
        </div>
        <div className="w-[100rem] p-2 pb-8">
          <Slider {...settings} className="">
            {offerProducts.map((product, i) => (
               <div key={product.id} className="p-2">
               <div className="border rounded-sm p-2 flex flex-col items-center justify-center shadow-sm text-center">
                 <img
                   src={product.image}
                   alt={product.name}
                   className="h-40 w-auto object-contain mb-2"
                 />
                 <h3 className="text-sm font-medium">{product.name}</h3>
                 <p className="text-sm text-gray-500">{product.offer}</p>
               </div>
             </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DealSlider;
