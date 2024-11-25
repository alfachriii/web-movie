import React, { Children, useEffect, useState } from "react";
import GoToMovieDetails from "../../components/GoToMovieDetails";
import { PiSmileySadFill } from "react-icons/pi";

const Movie = ({ data, scale }) => {
  const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;
  const moviesData = data;

  // validate isMoviesData exist
  // const [isMoviesData, setIsMoviesData] = useState(false);

  const ScaleValid = ({ children }) => {
    if (scale === "forUpcomingMovies")
      return (
        <div className="movie-box md:w-28 sm:w-20 w-12 md:h-52 sm:h-44 h-28 flex flex-col items-center m-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out lg:scale-75 scale-100">
          {children}
        </div>
      );
    return (
      <div className="movie-box md:w-28 sm:w-20 w-16 md:h-52 sm:h-44 h-28 flex flex-col items-center mb-10 sm:m-2 m-1 cursor-pointer hover:scale-110 transition duration-150 ease-in-out">
        {children}
      </div>
    );
  };

  return (
    <>
      {moviesData?.map((movie) => (
        <GoToMovieDetails key={movie?.id} id={movie?.id}>
          <ScaleValid>
            <div className="poster relative w-full h-5/6">
              <img
                src={`${baseImgUrl}/${movie?.poster_path}`}
                alt=""
                className="w-full h-full object-fill rounded-lg"
              />
              <div className="overlay w-full h-full absolute top-0 bg-gradient-to-b from-transparent from-15% to-gray-800 opacity-90 rounded-lg"></div>
              <div className="w-full absolute bottom-5 flex justify-center">
                <h3 className="text-yellow-500 lg:text-xl sm:text-base text-sm">{movie?.vote_average?.toString().slice(0, 3)}</h3>
              </div>
            </div>
            <h3 className="font-medium text-center mt-3 lg:text-xl sm:text-base text-sm">
              {movie?.title}
            </h3>
          </ScaleValid>
        </GoToMovieDetails>
      ))}
    </>
  );
};

export default Movie;
