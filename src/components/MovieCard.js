import React, { useEffect, useState } from "react"
import axios from "axios"
import moviecardposter from "../assets/moviecardposter.png"
import imdb from "../assets/imdb.png"
import rottenTomatoe from "../assets/rottentomatoe.png"
import { AiFillHeart } from "react-icons/ai"
import { useNavigate } from "react-router"
export const MovieCard = (props) => {
  // const movieData = props.data
  // const moviePoster = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`
  // const title = movieData.original_title
  // const desc = movieData.overview

  const id = props.data.id
  const [movieData, setMovieData] = useState([])

  const API_KEY = "1124c0f174383a022dc4f2914530e658"
  const BASE_URL = "https://api.themoviedb.org/3"

  // const searchURL = BASE_URL + "/search/movie?" + API_KEY
  const movieID_URL = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`

  const fetchData = async ([data, setData], requestLink) => {
    axios
      .get(requestLink)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log("Error", err)
        return err
      })
  }

  useEffect(() => {
    fetchData([movieData, setMovieData], movieID_URL)
  }, [])

  const posterBackground = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`
  const title = movieData.original_title

  let genre = ""
  if (movieData.length !== 0) {
    genre = movieData.genres.map((genre, index) => (
      <span key={index}>{genre.name} </span>
    ))
  }

  const releaseYear = new Date(movieData.release_date).getFullYear()
  const nav = useNavigate()
  const toMovie = (id) => {
    nav(`/movies/${id}`)
  }

  return (
    <div
      className="app__moviecard lg:w-[250px] md:w-[200px]  w-[150px]  relative text-left flex flex-col mx-auto "
      id={id}
      onClick={() => {
        toMovie(id)
      }}
      data-testid="movie-card"
    >
      <div className="absolute flex justify-between w-full px-4 md:top-4 top-2 ">
        {" "}
        {movieData.media_type && (
          <span className="font-bold text-[12px] h-fit text-black  py-[3px] px-[8px] rounded-xl flex bg-neutral-400 justify-center items-center">
            TV SERIES
          </span>
        )}
        <span className="w-[30px] h-[30px] rounded-[50%] flex bg-neutral-400 justify-center items-center relative left-full md:translate-x-[-100%] translate-x-[-80%] scale-[.75] md:scale-[1]">
          <AiFillHeart size={18} color="#D1D5DB" />
        </span>
      </div>
      <img
        src={posterBackground}
        alt="poster"
        className="w-full object-contain mb-3 "
        data-testid="movie-poster"
      />
      <p
        className="moviecard_duration text-gray-400 font-bold md:text-sm  text-xs leading-tight mb:mb-3 mb-1"
        data-testid="movie-release-date"
      >
        USA, {releaseYear}
      </p>
      <h3
        className="text-gray-900 font-bold md:text-lg text-base leading-tigh tmb:mb-3 mb-1"
        data-testid="movie-title"
      >
        {title}
      </h3>
      <div className="app__home-movie-desc_rating h-[17px] flex font-normal text-[12px]  justify-between mb:mb-3 mb-1 text-gray-900">
        <div className="app__home-movie-desc_rating-imbd flex">
          <img src={imdb} alt="imbd" />
          <span className="ml-[10px]">
            {(movieData.vote_average * 10).toFixed(1)}/100
          </span>
        </div>
        <div className="app__home-movie-desc_rating-rottentomatoe flex">
          <img src={rottenTomatoe} alt="rt" />
          <span className="ml-[10px]">97%</span>
        </div>
      </div>
      <p className="moviecard_duration text-gray-400 font-bold text-sm ">
        {genre}
      </p>
    </div>
  )
}