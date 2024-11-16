import React from "react";
import Movie from "./Movie";
import { useSelector } from "react-redux";

const PopularMovie = () => {
  // const movie = moviesData.map((movie, index) => movie.id)

  // console.log(movie)
  const moviesData = useSelector((state) => state.movies.data);

  return (
    <>
      <div id="new-realease" className="sm:w-2/3 w-10/12 mt-4">
        <h2 className="lg:text-3xl text-xl">Popular</h2>
        <div className="movie-con w-full h-fit flex justify-between flex-wrap">
          <Movie data={moviesData}/>
        </div>
      </div>
    </>
  );
};

export default PopularMovie;
