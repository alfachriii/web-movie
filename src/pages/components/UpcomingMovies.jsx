import React from "react";
import moviePoster from "../../assets/LIFT.jpg";
import Movie from "./Movie";
import { useFetchUpcomingMovies } from "../../features/useFetchUpcomingMovies";

const UpcomingMovies = () => {

  const { data: upcomingMoviesData, isLoading: fetchUpcomingLoading } = useFetchUpcomingMovies()

  return (
    <div id="popular-movie" className="lg:w-2/5">
      <h2>Upcoming Movies</h2>
      <div className="movies-con flex w-full max-h-[750px] flex-wrap ">
          <Movie className="lg:scale-100 scale-125" data={upcomingMoviesData?.data.results} scale="forUpcomingMovies"/>
      </div>
    </div>
  );
};

export default UpcomingMovies;
