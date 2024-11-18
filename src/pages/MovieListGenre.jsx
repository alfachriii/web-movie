import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "wouter";
import { useFetchMovieGenre } from "../features/useFetchMovieGenre";
import Movie from "./components/Movie";

const MovieListGenre = () => {
  const { genre, id } = useParams();

  const { data, isLoading } = useFetchMovieGenre(id);
  const [genreData, setGenreData] = useState([])

  useEffect(() => {
    if(!data?.data.results.lenght) setGenreData([])
    setGenreData(data?.data.results)
  }, [])

  return (
    <div className="flex flex-col items-center text-stone-300 w-full h-fit justify-center">
      <Navbar />
      <div id="movie-list" className="w-3/4 mt-5">
        <h2 className="lg:text-3xl text-xl">Movie list for genre: {genre}</h2>
        <div className="movie-con w-full flex justify-around flex-wrap">
            <Movie data={data?.data.results}/>
        </div>
      </div>
    </div>
  );
};

export default MovieListGenre;
