import React from "react";
import Movie from "./Movie";
import { useFetchUpcomingMovies } from "../../features/useFetchUpcomingMovies";
import UpcomingMovieLoading from "./UpcomingMovieLoading";

const UpcomingMovies = () => {
  const { data: upcomingMoviesData, isLoading: fetchUpcomingLoading } =
    useFetchUpcomingMovies();

  return (
    <>
      {!upcomingMoviesData && fetchUpcomingLoading ? (
        <UpcomingMovieLoading />
      ) : (
        <div id="popular-movie" className="lg:w-2/5">
          <h2>Upcoming Movies</h2>
          <div className="movies-con flex w-full max-h-[750px] flex-wrap ">
            <Movie
              className="lg:scale-100 scale-125"
              data={upcomingMoviesData?.data.results}
              scale="forUpcomingMovies"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingMovies;
