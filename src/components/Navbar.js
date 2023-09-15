import React, { useState } from "react"

import logo from "../assets/tv.png"
import menu from "../assets/Menu.png"
import { AiOutlineSearch } from "react-icons/ai"

function NavBar() {
  // const [seachQuery ,setSearchQuery]= useState('')
  return (
    <nav className="h-[80px] w-[100vw] flex items-center justify-between fixed top-0 left-0  z-[1000] px-2 md:px-6 ">
      <div className=" flex lg:w-[186px]  gap-1  w-fit h-[50px] justify-between items-center cursor-pointer scale-75 md:scale-100">
        <img
          src={logo}
          alt="tv"
          className="md:h-[50px] h-[30px] aspect-square "
        />
        <p className="font-bold md:text-[24px] text-xs leading-none text-white ">
          MovieBox
        </p>
      </div>
      <div className="app__navbar-search lg:w-[525px] w-[250px] md:w-[400px] md:h-[36px]   h-7 rounded-md border-2 border-gray-300 flex items-center justify-between p-[10px] scale-75 md:scale-100">
        <input
          type="text"
          placeholder="What do you want to watch?"
          className=" bg-transparent min-w-[70%]  border-none outline-none text-xs md:text-base"
        />
        <AiOutlineSearch size={22} color="#D1D5DB" onClick={() => {}} />
      </div>

      <div className="app__navbar-menu flex lg:w-[114px] gap-1 w-fit h-[36px] cursor-pointer justify-between items-center scale-75 md:scale-100">
        <p className="font-bold text-[16px] leading-[24px] text-white my-auto md:flex hidden ">
          Sign In
        </p>
        <img src={menu} alt="menu" className="h-[24px] w-[24px]" />
      </div>
    </nav>
  )
}

export default NavBar
