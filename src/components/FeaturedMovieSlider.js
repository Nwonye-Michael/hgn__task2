import React, { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { FaAngleRight } from "react-icons/fa"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { MovieCard } from "./MovieCard"

function FeaturedMovieSlider(props) {
  const movieData = props.data
  const [seeMore, setSeeMore] = useState(false)
  return (
    <div className="featuredmovieslider md:mt-[70px] mt-[35px]  md:px-[38px] px-[10px]">
      <div className="featuremovieslider_title flex justify-between items-center md:mb-[44px] md:px-[58px] mb-4 px-3">
        <span className="md:text-[36px] md:leading-[46px] text-[25px] leading-tight font-bold text-black">
          Featured Movie
        </span>{" "}
        <span
          className="md:text-[18px] md:leading-[24px] text-[12px] font-normal text-rose-700 h-fit flex justify-center items-center cursor-pointer"
          onClick={() => {
            setSeeMore((prev) => !prev)
          }}
        >
          See more <FaAngleRight />
        </span>
      </div>
      <div className="md:grid-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-y-8 gap-y-4 lg:gap-y-12">
        {movieData && seeMore
          ? movieData.map((data, index) => (
              <MovieCard data={data} key={data.title + index} />
            ))
          : movieData
              .slice(0, 10)
              .map((data, index) => (
                <MovieCard data={data} key={data.title + index} />
              ))}
      </div>
      {/* <Swiper
        slidesPerView={4}
        // spaceBetween={}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movieData &&
          movieData.map((data) => (
            <SwiperSlide>
              <MovieCard data={data} />
            </SwiperSlide>
          ))}
      </Swiper> */}
    </div>
  )
}

export default FeaturedMovieSlider
