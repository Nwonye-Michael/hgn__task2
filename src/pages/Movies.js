import React, { useState, useRef, useEffect } from "react"
import logo from "../assets/tv.png"
import menu from "../assets/Menu.png"
import bestMovies from "../assets/theBestMovie.png"

import { GoHome } from "react-icons/go"
import {
  BsCameraReels,
  BsCalendar3,
  BsFillPlayFill,
  BsList,
} from "react-icons/bs"

import axios from "axios"
import { PiMonitorPlay } from "react-icons/pi"
import { TbLogout } from "react-icons/tb"
import { Link } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa"

const Movies = () => {
  const movieId =
    window.location.href.split("/")[window.location.href.split("/").length - 1]

  const [movieData, setMovieData] = useState([])
  const [loading, setLoading] = useState(true)
  const [genre, setGenre] = useState([]) // Use a separate state for genre

  const API_KEY = "1124c0f174383a022dc4f2914530e658"
  const BASE_URL = "https://api.themoviedb.org/3"
  const video_url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  const movieID_URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`

  const fetchData = async (requestLink) => {
    try {
      const response = await axios.get(requestLink)
      setMovieData(response.data)
      // console.log(response.data)

      // Map the genres and update the genre state
      const mappedGenres = response.data.genres.map((genre) => (
        <span
          key={genre.id}
          className="border-[2px] border-[#F8E7EB] rounded-2xl md:text-sm text-[8px] lg:text-base font-medium text-[#B91C1C] lg:px-4 md:py-1 py-[1px] lg:ml-4  md:ml-2  md:px-2 px-1 h-fit"
        >
          {genre.name}{" "}
        </span>
      ))
      setGenre(mappedGenres)
    } catch (err) {
      console.log("Error", err)
      alert(err.AxiosError)
    } finally {
      setLoading(false)
    }
  }

  let [videoSrc, setVideoSrc] = useState("")

  const videoGet = async () => {
    try {
      const res = await axios.get(video_url)
      console.log(res)
      const videoKey = res.data.results[res.data.results.length - 1]?.key || ""
      setVideoSrc(`https://www.youtube.com/embed/${videoKey}`)
      console.log(`https://www.youtube.com/embed/${videoKey}/`)
    } catch (err) {
      console.log("Error", err)
    }
  }
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true)
  // Toggle side menu

  const handleSideMenu = () => {
    const sideNav = document.querySelector(".movies__sidenav")
    const movieContent = document.querySelector(".movies__content")
    const menuIcon = document.querySelector(".menu-icon")
    console.log("clicked")
    if (isSideMenuOpen) {
      sideNav.classList.add("md:hidden")
      movieContent.classList.remove("md:ml-[175px]")
      movieContent.classList.add("md:ml-[25px]")
      menuIcon.classList.add("!top-[15px]")
      menuIcon.classList.add("!left-3")
      setIsSideMenuOpen(!isSideMenuOpen)
    } else {
      sideNav.classList.remove("md:hidden")
      movieContent.classList.add("md:ml-[175px]")
      movieContent.classList.remove("md:ml-[25px]")
      menuIcon.classList.remove("!top-[15px]")
      menuIcon.classList.remove("!left-3")
      setIsSideMenuOpen(!isSideMenuOpen)
    }
    console.log("clciked")
  }

  useEffect(() => {
    fetchData(movieID_URL)
    videoGet()
  }, [movieID_URL])

  // Rest of your component

  if (loading) {
    return <p>Loading...</p>
  }

  const releaseYear = new Date(movieData.release_date)
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }
  const formattedDate = releaseYear.toLocaleString("en-US", options)

  return (
    <div className="movies flex w-[100vw]  h-[100vh] overflow-x-hidden relative lg:scale-100 mb-8">
      <div className="mobile-menu  flex flex-row absolute  md:hidden items-center justify-between w-full px-4 my-6 ">
        <Link to="/home" className=" ">
          <div className=" flex gap-x-[6px]">
            <img src={logo} alt="tv" className="h-[30px] aspect-square" />
            <p className="font-bold text-[15px] leading-[30px] text-black ">
              MovieBox
            </p>
          </div>
        </Link>
        <img
          src={menu}
          alt="menu"
          className=" h-[20px] w-[20px]"
          onClick={() => {}}
        />
      </div>

      <img
        src={menu}
        alt="menu"
        className=" menu-icon w-4 lg:hidden hidden md:flex absolute left-[15vw] top-9 cursor-pointer"
        onClick={() => {
          handleSideMenu()
        }}
      />
      <div className="movies__sidenav fixed lg:w-[226px] md:w-[160px] h-full border-[#0000004D] lg:rounded-r-[48px] md:rounded-r-3xl border md:flex flex-col py-[52px] hidden items-center">
        <div className=" flex  h-[50px]  justify-between items-center mb-1 lg:scale-100 md:scale-[.8] lg:gap-2 gap-[5px] md:ml-[-12px] lg:ml-0">
          <img src={logo} alt="tv" className="h-[50px] w-[50px]" />
          <p className="font-bold text-[24px] leading-none text-black ">
            MovieBox
          </p>
        </div>

        <ul className="font-semibold md:text-base lg:text-xl text-left w-full flex flex-col text-[#666666] items-center ">
          <Link to="/home" className="w-full ">
            {" "}
            <li className="flex gap-4 py-6 lg:pl-[42px] md:pl-6 w-full flex-1 hover:border-r-[6px] hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C] ">
              {" "}
              <GoHome size={24} /> Home
            </li>
          </Link>
          <li className="flex gap-4 py-6 lg:pl-[42px] md:pl-6 w-full flex-1 hover:border-r-[6px] hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C] ">
            <BsCameraReels size={24} /> Movies
          </li>
          <li className="flex gap-4 py-6 lg:pl-[42px] md:pl-6 w-full flex-1 hover:border-r-[6px] hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C] ">
            <PiMonitorPlay size={24} /> TV Series
          </li>
          <li className="flex gap-4 py-6 lg:pl-[42px] md:pl-6 w-full flex-1 hover:border-r-[6px] hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C] lg:scale-100 ">
            <BsCalendar3 size={24} /> Upcoming
          </li>

          <div className="bg-[#F8E7EB66] md:w-[170px]  md:h-[210px] lg:scale-100 md:scale-[.8]  flex flex-col gap-y-2 rounded-[20px] px-4  pt-10 pb-4  text-xs mt-2 border border-[#BE123CB2">
            <p className="text-base">Play movie quizes and earn free tickets</p>
            <p>50k people are playing now</p>
            <button className="bg-[#BE123C33] text-[#BE123C] py-[6px] px-4 rounded-[30px] ">
              Start playing
            </button>
          </div>

          <li className="flex gap-4 py-6 lg:pl-[42px] md:pl-6 w-full flex-1 hover:border-r-[6px] hover:border-r-[#BE123C] hover:bg-[#BE123C1A] hover:text-[#BE123C] ">
            <TbLogout size={24} /> Log out
          </li>
        </ul>
      </div>
      <div className="movies__content  h-full lg:w-[calc(100vw-226px)] md:min-w-[calc(100vw-190px)] w-[98%] flex-1 mt-12 md:mt-4 pt-[38px] lg:px-[38px] relative md:ml-[175px] lg:ml-[226px] px-4 md:px-auto">
        <div className="movie__content-trailer lg:w-[calc(100vw-300px)] md:w-[98%] aspect-video md:rounded-[20px] rounded-lg relative overflow-hidden border-2 ">
          {/* <iframe
            title={movieData.id + movieData.title}
            src={videoSrc}
            className="h-fit aspect-video w-full object-cover"
            allowFullScreen
          ></iframe> */}

          <img
            src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
            alt="movie poster"
          />
          <div className="overlay flex flex-col text-xs md:text-base justify-center absolute inset-0 items-center">
            <div className="p-2 rounded-[50%] aspect-square  bg-[#E8E8E833] ">
              <BsFillPlayFill className="" size={30} />
            </div>
            Watch trailer
          </div>
        </div>

        <div className="movie__content-info md:mt-8 mt-3 flex ">
          <div className="movie__content-info_left w-[70%]  md:w-[60%]  ">
            <div className="info-title lg:text-[23px] md:text-lg text-[#404040] font-bold w-fit flex md:flex-row flex-col justify-center whitespace-nowrap ">
              <div className="flex ">
                <span data-testid="movie-title">{movieData.title}</span>{" "}
                <span className="lg:px-3 px-1">.</span>
                <span data-testid="movie-release-date"> {formattedDate}</span>
                <span className="lg:px-3 px-1 ">.</span>
                {movieData.adult ? "18+" : "PG 13"}
                <span className="lg:px-3 px-1">.</span>
                <span>
                  {" "}
                  <span data-testid="movie-runtime">{movieData.runtime}</span>m
                </span>
              </div>
              <div className="w-fit h-fit gap-x-1 flex"> {genre}</div>
            </div>

            <p
              className="info-desc font-normal text-[10px] md:text-sm lg:text-base text-[#333333] text-left lg:mt-6 my-1  md:my-2 lg:mb-5 w-[80vw] md:w-full"
              data-testid="movie-overview"
            >
              {movieData.overview}
            </p>
            <div className="info-director lg:text-base md:text-sm text-[10px] text-left text-[#333333] lg:mb-8 mb-2">
              Director :<span className="text-[#BE123C]">Joseph Kosinski</span>
            </div>
            <div className="info-writer lg:text-base text-[10px] text-left text-[#333333] lg:mb-8 mb-2">
              Writer :
              <span className="text-[#BE123C]">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </div>
            <div className="info-director lg:text-base text-[10px] text-left text-[#333333] lg:mb-8 mb-2">
              Stars :
              <span className="text-[#BE123C]">
                {" "}
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </div>

            <div className="info-director lg:text-base text-[10px] text-left lg:mb-8 mb-2 flex border-[#333333] border w-full rounded-md whitespace-nowrap">
              <span className="  bg-[#BE123C] rounded-md px-2 flex items-center">
                {" "}
                Top Rated Movies #65
              </span>

              <span className="flex justify-between rounded-md items-center p-2 w-full">
                {" "}
                <span className="text-[#333333] flex ">
                  Awards 9 nominations
                </span>
                <FaAngleDown className="text-[#333333]  " />
              </span>
            </div>
          </div>
          <div className="movie__content-info_right border border-black min-w-[10%] h-[80%] mt-14 ml-5">
            <div className="lg:text-base text-[10px] text-left text-[#333333] w-full lg:mb-2 mb-1 flex justify-end items-center py-2  font-semibold ">
              ⭐ <span className="">8.5</span>| 350k
            </div>
            <div className="lg:text-base text-[10px] text-left text-[#333333] w-full lg:mb-2 mb-1 flex justify-center items-center p-2 rounded-md bg-[#BE123C] font-semibold ">
              See Showtimes
            </div>
            <div className="lg:text-base text-[10px] text-left text-[#333333] w-full lg:mb-2 mb-1  flex justify-center items-center p-2 rounded-md border-[#BE123C] border font-semibold bg-[#BE123C1A]">
              <BsList size={20} className="mr-[2px]" />
              More watch options
            </div>
            <div className="relative flex flex-col ">
              <p className="absolute w-full py-2 bg-[#12121280] lg:text-base text-sm flex items-center bottom-0 z-30 justify-center rounded-b-md">
                <BsList size={25} className="mr-[2px]" /> The Best Movies and
                Shows in September
              </p>
              <img
                src={bestMovies}
                alt="bestMovies"
                className="relative flex aspect-[360/230] max-w-[360px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies
