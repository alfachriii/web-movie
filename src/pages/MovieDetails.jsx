import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "wouter";
import { useGetDetailsMovie } from "../features/useGetDetailsMovie";
import UpcomingMovies from "./components/UpcomingMovies";
import { useGetUrlVideos } from "../features/useGetUrlVideos";
import FakeYoutube from "./components/FakeYoutube";

const MovieDetails = () => {
  const { id } = useParams();
  const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;

  const { data, isLoading } = useGetDetailsMovie(id);
  const { data: urlMovie } = useGetUrlVideos(id);

  const movieDetailsData = data?.data;

  if (!id || !movieDetailsData)
    return <h2 className="text-stone-300">Movie not found</h2>;

  const getYoutubeUrl = () => {
    if (!urlMovie) return "";
    if (urlMovie) return urlMovie.key;
  };

  const reload = () => {
    setTimeout(() => {
      location.reload();
    }, 10);
  };

  const opt = {
    playerVars: {
      autoPlay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center text-stone-300 w-full h-fit justify-center pb-10">
      <Navbar />
      <div className="flex lg:flex-row flex-col sm:w-3/4 w-10/12">
        <div id="movie-details" className="lg:w-3/5 w-full lg:mb-0 mb-10">
          <h2>{`${
            movieDetailsData.title
          } - ${movieDetailsData.release_date.slice(0, 4)}`}</h2>
          <a href={`https://www.youtube.com/watch?v=${urlMovie?.key}`} target="_blank" >
            <div className="w-full xl:h-80 lg:h-72 overflow-hidden rounded-xl mt-5 bg-gray-600">
              <FakeYoutube
                src={`${baseImgUrl}${movieDetailsData.backdrop_path}`}
              />
            </div>
          </a>
          <div className="flex mt-10 w-11/12 ">
            <div className="poster w-4/12 sm:h-56 h-36">
              <img
                src={`${baseImgUrl}${movieDetailsData.poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="information ml-6 w-8/12">
              <h3 className="lg:text-xl sm:text-base text-sm">Status:</h3>
              <h4 className="text-base text-stone-500 mt-1">
                {movieDetailsData.status}
              </h4>
              <h3 className="mt-5 lg:text-xl sm:text-base text-sm">
                Date Release:
              </h3>
              <h4 className="sm:text-sm text-xs text-stone-500 mt-1">
                {movieDetailsData.release_date}
              </h4>
              <h3 className="mt-5 mb-2 lg:text-xl sm:text-base text-sm">
                Genre:
              </h3>
              <div className="flex flex-wrap gap-2">
                {movieDetailsData.genres.map((genre) => (
                  <Link
                    key={genre.id}
                    to={`/genre/${genre.name.toLowerCase()}/${genre.id}`}
                    onClick={reload}
                  >
                    <div className="p-0.5 px-3 rounded-xl border border-gray-400 text-gray-400 hover:border-gray-300 hover:scale-110 transition duration-300 ease-in-out">
                      <h4 className="sm:text-sm text-xs hover:text-gray-300">
                        {genre.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
              <h3 className="mt-5 lg:text-xl sm:text-base text-sm">
                Overview:
              </h3>
              <h4 className="lg:text-xl sm:text-base text-sm text-stone-500 mt-1">
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
