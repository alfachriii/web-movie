import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import YouTube from "react-youtube";
import posterLift from "../assets/LIFT.jpg";
import posterFighter from "../assets/fighter.jpeg";
import posterInception from "../assets/inception.jpg";
import { Link, useParams } from "wouter";
import { useGetDetailsMovie } from "../features/useGetDetailsMovie";
import UpcomingMovies from "./components/UpcomingMovies";
import { useNavigate } from "react-router-dom";
import { useGetUrlVideos } from "../features/useGetUrlVideos";

const MovieDetails = () => {
  const { id } = useParams();
  const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;

  const { data, isLoading } = useGetDetailsMovie(id);
  const { data: urlMovie } = useGetUrlVideos(id)

  console.log(urlMovie)

  const movieDetailsData = data?.data;

  if (!id || !movieDetailsData)
    return <h2 className="text-stone-300">Movie not found</h2>;

  const getYoutubeUrl = () => {
    if (!urlMovie) return "";
    if (urlMovie) return urlMovie.key
  };

  console.log(movieDetailsData.genres);

  const getGenres = () => {
    const unFormatGenres = movieDetailsData.genres.map((genre) =>
      genre.name.toString()
    );
    const formatedGenres = unFormatGenres.join(", ");
    return formatedGenres;
  };

  const reload = () => {
    setTimeout(() => {
      location.reload();
    }, 10);
  };

  const opt = {
    height: "302",
    width: "540",
    playerVars: {
      autoPlay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center text-stone-300 w-full h-fit justify-center pb-10">
      <Navbar />
      <div className="flex w-3/4">
        <div id="movie-details" className="w-3/5">
          <h2>{`${
            movieDetailsData.title
          } - ${movieDetailsData.release_date.slice(0, 4)}`}</h2>
          <div className="w-fit h-fit overflow-hidden rounded-xl mt-5 bg-gray-600">
            <YouTube videoId={getYoutubeUrl} opts={opt} />
          </div>
          <div className="flex mt-10 w-11/12 ">
            <div className="poster w-4/12 h-56">
              <img
                src={`${baseImgUrl}${movieDetailsData.poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="information ml-6 w-8/12">
              <h3 className="">Status:</h3>
              <h4 className="text-base text-stone-500 mt-1">
                {movieDetailsData.status}
              </h4>
              <h3 className="mt-5">Date Release:</h3>
              <h4 className="text-base text-stone-500 mt-1">
                {movieDetailsData.release_date}
              </h4>
              <h3 className="mt-5 mb-2">Genre:</h3>
              <div className="flex flex-wrap gap-2">
                {movieDetailsData.genres.map((genre) => (
                  <Link
                    key={genre.id}
                    to={`/genre/${genre.name.toLowerCase()}/${genre.id}`}
                    onClick={reload}
                  >
                    <div className="p-0.5 px-3 rounded-xl border border-gray-400 text-gray-400 hover:border-gray-300">

                    <h4 className="text-base hover:text-gray-300">
                      {genre.name}
                    </h4>
                    </div>
                  </Link>
                ))}
              </div>
              {/* <h4 className="text-base text-stone-500 mt-1">{getGenres()}</h4> */}
              <h3 className="mt-5">Overview:</h3>
              <h4 className="text-base text-stone-500 mt-1">
                {movieDetailsData.overview}
              </h4>
            </div>
          </div>
        </div>
        <UpcomingMovies />
      </div>
    </div>
  );
};

export default MovieDetails;
