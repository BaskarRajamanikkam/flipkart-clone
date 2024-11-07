import React from "react";
import { FaBook } from "react-icons/fa";
import { PiShootingStar } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import payment from '../../assets/payment-methods.svg';

const Footer = () => {
  return (
    <footer className="h-80 bg-[#212121] text-white">
      <div className="border-b border-gray-500">
      <div className="flex justify-between items-start p-8 mx-8 ">
        <div className="flex flex-col">
          <h3 className="text-sm uppercase font-medium text-gray-500 mb-2">
            About
          </h3>
          <ul className="text-sm font-normal">
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Flipkart Stories</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm uppercase font-medium text-gray-500 mb-2">
            Group Companies
          </h3>
          <ul className="text-sm font-normal">
            <li>
              <a href="">Myntra</a>
            </li>
            <li>
              <a href="">Cleartrip</a>
            </li>
            <li>
              <a href="">Shopsy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm uppercase font-medium text-gray-500 mb-2">
            Help
          </h3>
          <ul className="text-sm font-normal">
            <li>
              <a href="">Payments</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Cancellation & Returns</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Report Infringment</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mr-8">
          <h3 className="text-sm uppercase font-medium text-gray-500 mb-2">
            Consumer Policy
          </h3>
          <ul className="text-sm font-normal">
            <li>
              <a href="">Cancellation & Returns</a>
            </li>
            <li>
              <a href="">Terms Of Use</a>
            </li>
            <li>
              <a href="">Security</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
            <li>
              <a href="">Grievance Redressal</a>
            </li>
            <li>
              <a href="">EPR Compliance</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col border-l border-gray-700 px-6">
          <h3 className="text-sm  font-medium text-gray-500 mb-2">Mail Us:</h3>
          <div className="text-sm font-normal">
            <p>
              Flipkart Internet Private Limited,
              <br /> Buildings Alyssa Begonia & <br /> Clove Embassy Tech
              Village, <br /> Outer Ring Road, Devarabeesanahalli Village,
              <br /> Bengaluru, 560103, <br /> Karnataka, India
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm  font-medium text-gray-500 mb-2">
            Registered Office Address:
          </h3>
          <div className="text-sm font-normal">
            <p>
              Flipkart Internet Private Limited,
              <br /> Buildings Alyssa Begonia & <br /> Clove Embassy Tech
              Village, <br /> Outer Ring Road, Devarabeesanahalli Village,
              <br /> Bengaluru, 560103, <br /> Karnataka, India <br /> CIN :
              U51109KA2012PTC066107 <br /> Telephone: <span className="text-blue-500"> 044-45614700</span> / <span className="text-blue-500">044-67415800</span>
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="">
        <ul className="flex justify-between items-center p-4 px-20 text-sm">
            <li>
                <a href="" className="flex items-center gap-2">
                    <FaBook className="text-xs text-yellow-500" />
                    <span>Become a Seller</span>
                </a>
            </li>
            <li>
                <a href="" className="flex items-center gap-2">
                    <PiShootingStar className=" text-yellow-500" />
                    <span>Advertise</span>
                </a>
            </li>
            <li>
                <a href="" className="flex items-center gap-2">
                    <CiGift  className=" text-yellow-500" />
                    <span>Gift Cards</span>
                </a>
            </li>
            <li>
                <a href="" className="flex items-center gap-2">
                    <IoIosHelpCircleOutline className=" text-yellow-500" />
                    <span>Help Center</span>
                </a>
            </li>
            <li>
                <a href="" className="flex items-center gap-2">
                    <FaRegCopyright className=" text-yellow-500"/> 
                    <span>2007 - 2024 Flipkart.com</span>
                </a>
            </li>
            <li>
                <img src={payment} alt="" />
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
