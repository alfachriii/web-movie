import React from "react";
import moviePoster from "../../assets/LIFT.jpg";
import { useSelector } from "react-redux";
import GoToMovieDetails from "../../features/GoToMovieDetails";
import { PiSmileySadFill } from "react-icons/pi";

const Movie = ({data}) => {
  
  const moviesData = data
  // console.log(localStorage.getItem("movies") === undefined)


  // const moviesData = undefined;

  // console.log(moviesData);
  if (!moviesData) {
    return <div className="sm:w-2/3 w-full h-96 mt-10 flex flex-col items-center pr-28">
      <PiSmileySadFill className="text-gray-500 text-5"/>
      <h1 className="text-3xl font-medium text-gray-500">ERR Bad Server</h1>
      </div>;
  }

  const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;

  return (
    <>
      {moviesData.map((movie) => (
        <GoToMovieDetails key={movie.id} id={movie.id}>
          <div
            className="movie-box md:w-28 sm:w-20 w-12 md:h-52 sm:h-44 h-28 flex flex-col items-center mb-10 m-3 cursor-pointer hover:scale-105"
          >
            <div className="poster relative w-full h-5/6">
              <img
                src={`${baseImgUrl}/${movie.poster_path}`}
                alt=""
                className="w-full h-full object-fill rounded-lg"
              />
              <div className="overlay w-full h-full absolute top-0 bg-gradient-to-b from-transparent from-15% to-gray-800 opacity-90 rounded-lg"></div>
              <div className="w-full absolute bottom-5 flex justify-center">
                <h3 className="text-yellow-500">{movie.vote_average}</h3>
              </div>
            </div>
            <h3 className="font-medium text-center mt-3 lg:text-xl sm:text-base text-xs">
              {movie.title}
            </h3>
          </div>
        </GoToMovieDetails>
      ))}
    </>
  );
};

export default Movie;
