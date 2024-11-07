import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MetaData from "../../components/Layouts/MetaData";
import Nav from "../../components/Nav/Nav";
import { FormControl, FormControlLabel, Radio, RadioGroup, Slider } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { categories } from "../../utils/constants";
import { CiStar } from "react-icons/ci";
import { Circle, Loader } from 'lucide-react';
import Product from "./Product";


const Products = () => {
  const location = useLocation();



  const [price, setPrice] = useState([0, 50000]);
  const [ratings, setRatings] = useState(0);
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [ratingsToggle, setRatingsToggle] = useState(true);
 const [category, setCategory] = useState(location.search ? location.search.split("=")[1] : "");

 

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  const products = [{id:1},{id:2},{id:3}]

  return (
    <>
      <MetaData title="" />
      <Nav />
      <main className="mx-24 mt-2">
        <div className="flex gap-x-2 mb-7 mt-2">
          <div className="flex flex-col w-1/6 px-1">
            <div className="bg-white flex flex-col rounded-sm shadow">
              <div className="flex items-center justify-start py-2 px-4 border-b">
                <p className="text-lg font-medium">Filters</p>
              </div>
              <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
                <div className="flex flex-col gap-2 border-b px-4">
                  <span className="font-medium text-sm">Price</span>
                  <div className="">
                    <Slider
                      value={price}
                      onChange={priceHandler}
                      valueLabelDisplay="auto"
                      getAriaLabel={() => "price range slider"}
                      min={0}
                      max={50000}
                    />
                    <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
                      <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">&#8377;{price[0].toLocaleString()}</span>
                      <span  className="font-medium text-gray-400">to</span>
                      <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">&#8377;{price[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col border-b px-4">
                  <div onClick={() => setCategoryToggle(!categoryToggle)} className="flex justify-between cursor-pointer py-2 pb-4 items-center">
                    <p className="font-medium text-xs uppercase">Category</p>
                    {categoryToggle ?  <IoIosArrowUp /> : <IoIosArrowDown /> }
                  </div>
                  {categoryToggle && (
                    <div className="">
                      <FormControl>
                        <RadioGroup 
                          aria-labelledby="category-radio-buttons-group"
                          onChange={(e)=> setCategory(e.target.value)}
                          name="category-radio-buttons"
                          value={category}
                        >
                          {categories.map((el,i)=>(
                            <FormControlLabel key={i} value={el} control={<Radio size="small" />} label={<span className="text-sm" key={i}>{el}</span>} />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </div>
                  )}
                </div>


                  <div className="flex flex-col border-b px-4">
                    <div onClick={() => setRatingsToggle(!ratingsToggle)} className="flex justify-between cursor-pointer py-2 pb-4 items-center">
                      <p className="font-medium text-xs uppercase">Ratings</p>
                      {ratingsToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    {ratingsToggle &&(
                      <div className="flex flex-col pb-1">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="ratings-radio-buttons-group"
                            onChange={(e) => setRatings(e.target.value)}
                            value={ratings}
                            name="ratings-radio-buttons"
                          >
                            {[4,3,2,1].map((el,i)=>(
                              <FormControlLabel value={el} key={i} control={<Radio size="small" />} label={<span className="flex items-center text-sm">{el}<CiStar className="text-sm mr-0.5" /> & above</span>} />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </div>
                    )}
                  </div>

              </div>

            </div>

          </div>

            <div className="flex-1">
              { true && products.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
                <img draggable="false" className="w-1/2 h-44 object-contain" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png" alt="Search Not Found" />
                <h1 className="text-2xl font-medium text-gray-900">Sorry, no results found!</h1>
                <p className="text-xl text-center text-primary-grey">Please check the spelling or try searching for something else</p>
              </div>
              )
              }

              { true && products.length > 0 &&  (
                <div className=" bg-white">
                  <div className="grid gap-4 border">
                      <Product />
                  </div>
                </div>
              ) }
            </div>


        </div>
      </main>
    </>
  );
};

export default Products;
