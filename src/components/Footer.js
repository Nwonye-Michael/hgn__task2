import React from "react"
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"
import x from "../assets/x.png"
import youtube from "../assets/youtube.png"

import {
  FaYoutube,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer md:pt-[143px]  md:pb-[73px] py-10 flex justify-center items-center flex-col md:gap-y-9  gap-y-4 scale-75 md:scale-100 ">
      <div className="footer__socials flex text-gray-900 gap-12">
        {" "}
        <FaFacebookSquare size={24} /> <FaInstagram size={24} />{" "}
        <FaTwitter size={24} /> <FaYoutube size={24} />{" "}
      </div>
      <div className="footer__terms flex text-gray-900 gap-12 font-bold md:text-lg text-base whitespace-nowrap">
        <span className="">Conditions of Use</span>
        <span>Privacy & Policy</span>
        <span>Press Room</span>
      </div>
      <p className=" font-bold text-gray-500">
        © 2021 MovieBox by Adriana Eka Prayudha{" "}
      </p>
    </div>
  )
}

export default Footer
