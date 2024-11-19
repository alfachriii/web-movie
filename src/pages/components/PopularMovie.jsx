import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import { useFetchPopularMovies } from "../../features/useFetchPopularMovies";

const PopularMovie = () => {
  // const [popularMoviesData, setPopularMoviesData] = useState([])

  const {
    data: dataPopularMovies,
    isLoading: isLoadingFetchPopularMovie,
    isError: isErorrFetchPopularMovie,
  } = useFetchPopularMovies();

  // const popularMoviesData = dataPopularMovies?.data.results

  return (
    <>
      <div id="new-realease" className="sm:w-2/3 w-10/12 mt-4">
        <h2 className="lg:text-3xl text-xl">Popular</h2>
        <div className="movie-con w-full h-fit flex justify-between flex-wrap">
          <Movie data={dataPopularMovies?.data.results}/>
        </div>
      </div>
    </>
  );
};

export default PopularMovie;
