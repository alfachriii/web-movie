import React from "react";
import moviePoster from "../../assets/LIFT.jpg";
import Movie from "./Movie";
import { useFetchUpcomingMovies } from "../../features/useFetchUpcomingMovies";

const UpcomingMovies = () => {

  const { data: upcomingMoviesData, isLoading: fetchUpcomingLoading } = useFetchUpcomingMovies()
  console.log(upcomingMoviesData)

  return (
    <div id="popular-movie" className="w-2/5">
      <h2>Popular Movie</h2>
      <div className="movies-con flex w-full max-h-[750px] flex-wrap ">
        {/* <div className="movie w-44 h-80 flex flex-col items-center mt-5"> */}
          <Movie data={upcomingMoviesData?.data.results} scale="forUpcomingMovies"/>
          {/* <div className="poster relative w-full h-5/6">
            <img
              src={moviePoster}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
            <div className="overlay w-full h-full absolute top-0 bg-gradient-to-b from-transparent from-15% to-gray-800 opacity-90 rounded-lg"></div>
            <div className="w-full absolute bottom-5 flex justify-center">
              <h3 className="text-yellow-500">10.0</h3>
            </div>
          </div>
          <h3 className="font-medium text-center mt-3">
            gta 6 beta
          </h3>
        </div>
        <div className="movie w-44 h-80 flex flex-col items-center mt-5">
          <div className="poster relative w-full h-5/6">
            <img
              src={moviePoster}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
            <div className="overlay w-full h-full absolute top-0 bg-gradient-to-b from-transparent from-15% to-gray-800 opacity-90 rounded-lg"></div>
            <div className="w-full absolute bottom-5 flex justify-center">
              <h3 className="text-yellow-500">10.0</h3>
            </div>
          </div>
          <h3 className="font-medium text-center mt-3">
            gta 6 beta
          </h3>
        </div>
            <div className="movie w-44 h-80 flex flex-col items-center mt-5">
            <div className="poster relative w-full h-5/6">
                <img
                src={moviePoster}
                alt=""
                className="w-full h-full object-fill rounded-lg"
                />
                <div className="overlay w-full h-full absolute top-0 bg-gradient-to-b from-transparent from-15% to-gray-800 opacity-90 rounded-lg"></div>
                <div className="w-full absolute bottom-5 flex justify-center">
                <h3 className="text-yellow-500">10.0</h3>
                </div>
            </div>
            <h3 className="font-medium text-center mt-3">
                gta 6 beta
            </h3>*/}
        {/* </div> */}
      </div>
    </div>
  );
};

export default UpcomingMovies;
