import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { FaBoxOpen, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { TbBox } from "react-icons/tb";
import { CiCreditCard2, CiHeart } from "react-icons/ci";
import { IoGiftOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { PiHeadsetDuotone } from "react-icons/pi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { AiOutlineDownload } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Nav from "../Nav/Nav";

const AllHeader = () => {
  return (
    <>
      <header className="bg-[#2874F0] p-2 w-full fixed top-0 left-0 shadow z-10">
        <nav className="max-w-7xl mx-auto px-1 h-12 flex items-center">
          <Link to="/">
            <img className="w-auto h-8" src={logo} alt="" />
          </Link>
          <div className="flex flex-grow bg-[#F0F5FF]  mx-8 ">
            <form
              action=""
              className="flex items-center justify-between w-full px-4 py-1 "
            >
              <input
                className="w-full px-4 py-1 text-base bg-transparent outline-none border-none"
                type="text"
                placeholder="search products, brands and more"
              />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="flex items-center gap-x-5">
            <div className=" relative group">
              <Link className="group bg-white text-[#2874f0]  px-8 py-0.5 text-[18px] font-semibold">
                Login
              </Link>
              <div className="absolute mt-1 hidden group-hover:block  left-0 z-10  w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="flex items-center justify-between border-b px-4  pt-3 pb-3">
                  <span className="text-sm">New Customer?</span>
                  <Link
                    to="/account/signup"
                    className="text-sm font-semibold text-blue-500"
                  >
                    Signup
                  </Link>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <FaRegUserCircle />
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <TbBox /> <span>Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <CiHeart />
                      <span>Wishlist</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <IoGiftOutline />
                      <span>Rewards</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <CiCreditCard2 />
                      <span>Gift Cards</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <button className="flex items-center gap-2  px-2 py-1 text-white font-normal">
              <FaBoxOpen className="text-xl" />
              <span className="text-lg">Become a Seller</span>
            </button>

            <div className="relative group cursor-pointer">
              <button className="group flex items-center gap-1 text-white">
                <span>More</span>
                <IoIosArrowDown className="text-sm mt-0.5 group-hover:rotate-180 transition " />
              </button>
              <div className="absolute mt-4 hidden group-hover:block  left-0 z-10  w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-50">
                      <IoIosNotificationsOutline className="text-lg" />
                      <span>Notification Preferences</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <PiHeadsetDuotone />
                      <span>24/7 Customer Care</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <HiArrowTrendingUp />
                      <span>Advertise</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50">
                      <AiOutlineDownload />
                      <span>Download App</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <button className="flex items-center gap-1 text-white rounded-md">
              <BsCart3 className="text-lg  " />
              <span>Cart</span>
            </button>
          </div>
        </nav>
      </header>
        <Nav />
          </>
  );
};

export default AllHeader;
