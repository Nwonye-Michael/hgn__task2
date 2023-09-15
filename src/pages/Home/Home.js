import React, { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../../components/Navbar"
import { AiFillPlayCircle } from "react-icons/ai"

import rottenTomatoe from "../../assets/rottentomatoe.png"
import imdb from "../../assets/imdb.png"
import "./Home.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"

import FeaturedMovieSlider from "../../components/FeaturedMovieSlider"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

function Home() {
  const [movieData, setMovieData] = useState([])

  const API_KEY = "1124c0f174383a022dc4f2914530e658"
  const BASE_URL = "https://api.themoviedb.org/3"
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&api_key=" + API_KEY
  const IMG_URL = "https://image.tmdb.org/t/p/w500"
  //  d

  const fetchData = async ([data, setData], requestLink) => {
    axios
      .get(requestLink)
      .then((response) => {
        setData(response.data.results)
        console.log(response.data.results)
      })
      .catch((err) => {
        console.log("Error", err)
        return err
      })
  }

  useEffect(() => {
    fetchData([movieData, setMovieData], API_URL)
  }, [])

  return (
    <div className="app__home h-[100vh] relative ">
      <Navbar></Navbar>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          // disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper md:max-h-[100vh] max-h-[70vh] "
      >
        {movieData.map((movie, index) => {
          const posterBackground = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          const title = movie.original_title
          const desc = movie.overview

          return (
            <SwiperSlide className="h-fit" key={title + index}>
              <img
                src={posterBackground}
                alt="poster"
                className=" md:flex-1 flex absolute h-fit"
              />

              <div className="app__home-desc w-[404px] relative md:left-[98px] md:top-[50%] top-[25%] translate-x-[-10%] md:translate-y-[-50%] scale-[.6] md:scale-100">
                <h2 className="w-fit text-5xl leading-[56px] font-semibold md:font-bold text-left mb-4">
                  {title}
                </h2>

                <div className="app__home-movie-desc_rating h-[17px] flex font-extralight text-[12px]  w-[184px] justify-between mb-4">
                  <div className="app__home-movie-desc_rating-imbd flex ">
                    <img src={imdb} alt="imbd" />
                    <span className="ml-[10px]">86.0/100</span>
                  </div>
                  <div className="app__home-movie-desc_rating-rottentomatoe flex">
                    <img src={rottenTomatoe} alt="rt" />
                    <span className="ml-[10px]">97%</span>
                  </div>
                </div>
                <p className="md:font-medium  text-sm text-left mb-4">{desc}</p>
                <Link to={`/movies/${movie.id}`}>
                  {" "}
                  <button className=" bg-rose-700 flex justify-center items-center py-[6px] px-[16px] rounded-md gap-2 text-[14px]">
                    <AiFillPlayCircle size={22} /> Watch trailer
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <FeaturedMovieSlider data={movieData} />
      <Footer />
    </div>
  )
}

export default Home
