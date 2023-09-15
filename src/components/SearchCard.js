import React from "react"
import poster from "../assets/Poster.png"
import { useNavigate } from "react-router"
const SearchCard = ({ data }) => {
  const nav = useNavigate()
  const toMovie = (id) => {
    nav(`/movies/${id}`)
  }
  return (
    // i will continue later i beg
    <div
      id={data.id}
      onClick={() => {
        toMovie(data.id)
      }}
      className="my-6 max-h-[12rem] lg:max-w-[50vw] w-fit border md:border-2 border-gray-400 md:rounded-2xl rounded-md px-2 md:px-4 py-2 items-center lg:gap-6 md:gap-3 gap-[6px] flex cursor-pointer hover:bg-[#ec88a125]  absolute left-[50%] translate-x-[-50%] "
    >
      <div className="lg:rounded-lg md:rounded rounded-sm overflow-hidden  lg:h-[8rem] md:h-[6rem] aspect-[6/8] h-[4rem] ">
        <img src={poster} alt="poster" className="object-cover w-full h-full" />
      </div>
      <div className="flex items-center lg:gap-6 md:gap-3 gap-2 whitespace-nowrap">
        {" "}
        <p className="text-rose-600 font-bold lg:text-xl md:text-base text-xs leading-none ">
          Lorem ipsum dolor sit amet
        </p>
        <div className="text-gray-400 font-bold md:text-[10px] lg:text-xs text-[8px] lg:gap-3 md:gap-2 gap-1 flex h-fit leading-none items-center ">
          {" "}
          <span>USA 2017</span>
          <span>117m</span>
        </div>
      </div>
    </div>
  )
}

export default SearchCard
