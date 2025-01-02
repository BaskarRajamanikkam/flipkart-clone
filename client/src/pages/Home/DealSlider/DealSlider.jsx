import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import watch from "../../../assets/products/watch.webp";
import offer from "../../../assets/products/offer.webp";
import { getRandomProducts } from "../../../utils/functions";
import { offerProducts } from "../../../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DealSlider.css";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../../api/productApi";
import { setProducts } from "../../../redux/features/ProductSlice";
import { categoryData } from "../../../utils/data";

const PrevArrow = ({ onClick, visible }) => (
  <button
    onClick={onClick}
    className={`absolute -left-2 top-1/2 transform -translate-y-1/2 h-20 rounded-sm bg-gray-100 p-2  shadow-lg z-10  ${
      !visible && "hidden"
    }`}
  >
    <IoIosArrowBack size={20} className="text-gray-600" />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick, visible }) => (
  <button
    onClick={onClick}
    className={`absolute -right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 h-20  rounded-sm shadow-lg z-10  ${
      !visible && "hidden"
    }`}
  >
    <IoIosArrowForward size={20} className="text-gray-600" />
  </button>
);

const DealSlider = ({ title, product }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = 6;

  const data = product;
  const totalSlides = Array.isArray(data) ? data.length : 0;
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <NextArrow  visible={currentSlide < totalSlides - slidesToShow} />, // Hide next arrow at the last slide
    prevArrow: <PrevArrow visible={currentSlide > 0} />, // Hide prev arrow at the first slide
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
        <Link to='/offers' className="flex items-center justify-between p-4">
          <h3 className="text-xl font-medium">{title}</h3>
          <Link to='/offers' className="text-white bg-indigo-500 rounded-full p-1">
            <IoIosArrowForward />
          </Link>
        </Link>
        <div className="w-[100rem] p-2 pb-6">
          <Slider {...settings} className="">
            {data?.map((item) => (
              <div className="p-2">
                <Link to={`/products?name=${item.name}`}  className="border rounded-sm p-2 flex flex-col items-center justify-center shadow-sm text-center">
                  <img src={item.image} alt={item.name} className="h-44 w-auto my-2  object-contain mb-2" />

                  <h3 className="text-sm font-medium">{item.dName}</h3>
                  <p className="text-sm text-green-700">&#8377; {item.price}</p>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DealSlider;
