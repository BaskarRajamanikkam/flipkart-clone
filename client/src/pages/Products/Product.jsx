import React from "react";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
 
  return (
    <>
      {data?.map((item,index) => {
          const discountPercentage = Math.round(
            ((item.price - item.cuttedPrice) / item.price) * 100
          );
        return(
        <Link to={`/product/${item._id}`} key={index} className="flex justify-between gap-x-4 border-b">
          <div key={index} className=" w-80 h-72 p-6 ">
            <img
              className="w-full h-full object-contain"
              src={item.images[0].url}
              alt={item.name}
            />
          </div>
          <div className="w-full flex mr-10">
            <div className="w-3/4 p-5 flex flex-col gap-7">
              <div className="">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-green-600 text-white font-bold px-1 rounded mr-2">
                    {item.rating ? `${item.rating}★`: '0 ★'}
                  </span>
                  <span>{item.numOfReviews ? item.numOfReviews : '0 Reviews'}</span>
                </div>
              </div>
              <ul className="list-disc">
                {item.highlights.map((data,index)=>(
                  <li key={index}>{data}</li>
                )) }
              </ul>
            </div>

            <div className="w-1/4 pt-10">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-medium text-gray-800">
                &#8377; {item.cuttedPrice}
                </span>
                <div className="flex items-center text-sm">
                  <span className="line-through text-gray-500 mr-2">
                  &#8377; {item.price}
                  </span>
                  <span className="text-green-600 font-semibold">{discountPercentage}% off</span>
                </div>
                <span className="text-green-700 text-xs">
                  Lowest price since launch
                </span>
              </div>
            </div>
          </div>
        </Link>
)})}
    
     
    </>
  );
};

export default Product;
