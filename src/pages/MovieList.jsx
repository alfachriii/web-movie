import React from "react";
import Navbar from "../components/Navbar";
import moviePoster from "../assets/LIFT.jpg";
import moviePoster2 from "../assets/fighter.jpeg";
import moviePoster3 from "../assets/inception.jpg";
import Movie from "./components/Movie";

const MovieList = () => {
  return (
    <div className="flex flex-col items-center text-stone-300 w-full h-fit justify-center">
      <Navbar />
      <div id="movie-list" className="w-3/4 mt-5">
        <h2 className="lg:text-3xl text-xl">Movie List:</h2>
        <div className="movie-con w-full flex justify-around flex-wrap">
          <Movie
            data={{
              title: "Fighter (2024)",
              rating: "11.7",
              poster: moviePoster2,
            }}
          />
          <Movie
            data={{
              title: "Inception (2017)",
              rating: "6.6",
              poster: moviePoster3,
            }}
          />
          <Movie
            data={{
              title: "Fighter (2024)",
              rating: "11.7",
              poster: moviePoster2,
            }}
          />
          <Movie
            data={{
              title: "Inception (2017)",
              rating: "6.6",
              poster: moviePoster3,
            }}
          />
          <Movie
            data={{
              title: "LIFT (2019)",
              rating: "9.0",
              poster: moviePoster,
            }}
          />
          <Movie
            data={{
              title: "Fighter (2024)",
              rating: "11.7",
              poster: moviePoster2,
            }}
          />
          <Movie
            data={{
              title: "Fighter (2024)",
              rating: "11.7",
              poster: moviePoster2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
