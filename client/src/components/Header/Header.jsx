import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TbBox } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IoGiftOutline } from "react-icons/io5";
import { CiCreditCard2 } from "react-icons/ci";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiHeadsetDuotone } from "react-icons/pi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { AiOutlineDownload } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-[#FFF] p-2 w-full static shadow z-10">
      <nav className="max-w-7xl mx-auto h-12 flex items-center">
        <Link>
          <img src={logo} alt="" />
        </Link>
        <div className="flex flex-grow bg-[#F0F5FF] rounded-md mx-8 ">
          <form className="flex items-center w-full px-4 py-1  ">
            <FaSearch className="text-gray-400 font-normal" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full px-4 py-1 text-base bg-transparent outline-none border-none"
            />
          </form>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="relative group cursor-pointer">
            <button className="group flex items-center gap-1 hover:bg-[#2A55E5] p-2 hover:text-white rounded-md">
              <FaRegUserCircle className="text-xl" />
              <span>Login</span>
              <IoIosArrowDown className="text-sm mt-0.5 group-hover:rotate-180 transition " />
            </button>
            <div className="absolute hidden group-hover:block  left-0 z-10 mt- w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="flex items-center justify-between border-b px-4  pt-3 pb-3">
                <span className="text-sm">New Customer?</span>
                <Link
                  to="/login"
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

          <button className="flex items-center gap-2  px-4 py-2 hover:bg-gray-100 rounded-md">
            <BsCart3 className="text-xl" />
            <span>Cart</span>
          </button>

          <button className="flex items-center gap-2  px-2 py-1">
            <FaBoxOpen />
            <span>Become a Seller</span>
          </button>

          <Menu as="div" className="relative">
            <div>
              <MenuButton className="flex items-center gap-2  px-2 py-2  rounded-md">
                <BiDotsVerticalRounded className="text-xl" />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute  right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
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
            </MenuItems>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
