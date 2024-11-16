import React from "react";
import Navbar from "../components/Navbar";
import YouTube from "react-youtube";
import PopularMovie from "./components/UpcomingMovie";
import posterLift from "../assets/LIFT.jpg"
import posterFighter from "../assets/fighter.jpeg"
import posterInception from "../assets/inception.jpg"
import { useParams } from "wouter";
import { useGetDetailsMovie } from "../features/useGetDetailsMovie";

const MovieDetails = () => {
  const { id } = useParams()
const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL
  
  const { data, isLoading  } = useGetDetailsMovie(id)

  const movieDetailsData = data?.data

  console.log(movieDetailsData)

  if(!id || !movieDetailsData) return (
    <h2 className="text-stone-300">Movie not found</h2>
  )

  const getYoutubeUrl = (url) => {
    if(!url) return ""
    if(url) return url
  }

  const getGenres = () => {
    const unFormatGenres = movieDetailsData.genres.map((genre) => genre.name.toString())
    const formatedGenres = unFormatGenres.join(", ")
    return formatedGenres
  }

  const opt = {
    height: "302",
    width: "540",
    playerVars: {
      autoPlay: 0,
    },
  };

  return (
    <div className="flex flex-col items-center text-stone-300 w-full h-fit justify-center">
      <Navbar />
      <div className="flex w-3/4">
        <div id="movie-details" className="w-3/5">
          <h2>{movieDetailsData.title}</h2>
          <div className="w-fit h-fit overflow-hidden rounded-xl mt-5 bg-gray-600">
            <YouTube videoId={getYoutubeUrl(movieDetailsData.video)} opts={opt} />
          </div>
          <div className="flex mt-10 w-11/12 ">
            <div className="poster w-4/12 h-56">
                <img src={`${baseImgUrl}${movieDetailsData.poster_path}`} alt="" className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="information ml-6 w-8/12">
                <h3 className="">Status:</h3>
                <h4 className="text-base text-stone-500 mt-1">{movieDetailsData.status}</h4>
                <h3 className="mt-5">Date Release:</h3>
                <h4 className="text-base text-stone-500 mt-1">{movieDetailsData.release_date}</h4>
                <h3 className="mt-5">Genre:</h3>
                <h4 className="text-base text-stone-500 mt-1">{getGenres()}</h4>
                <h3 className="mt-5">Overview:</h3>
                <h4 className="text-base text-stone-500 mt-1">{movieDetailsData.overview}</h4>
            </div>
          </div>
        </div>
        <PopularMovie />
      </div>
    </div>
  );
};

export default MovieDetails;
