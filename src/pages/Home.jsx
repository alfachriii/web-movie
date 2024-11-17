import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DOMPurify from "dompurify";
import PopularMovie from "./components/PopularMovie";
import { useAddToLocalStorage } from "../features/useAddToLocalStorage";
import { useSelector } from "react-redux";
import { PiSmileySadFill } from "react-icons/pi";
import { useFetchPopularMovies } from "../features/useFetchPopularMovies";
import { useSearchMovies } from "../features/useSearchMovies";
import Movie from "./components/Movie";

const Home = () => {
  const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;
  const {
    data: dataPopularMovies,
    isLoading: isLoadingFetchPopularMovie,
    isError,
  } = useFetchPopularMovies();
  useAddToLocalStorage("popular_movies", dataPopularMovies?.data.results);

  const popularMoviesData = useSelector((state) => state.movies.popular.data);

  const [isPopularMoviesData, setIsPopularMoviesData] = useState(false);

  useEffect(() => {
    if (!popularMoviesData.lenght) setIsPopularMoviesData(false);
    if (popularMoviesData) setIsPopularMoviesData(true);
  }, [popularMoviesData]);

  const [selectedMovieData, setSelectedMovieData] = useState({});
  const getSelectedMovieData = () => {
    const random = Math.floor(Math.random() * 21);
    setSelectedMovieData(popularMoviesData[random]);
  };

  const limitWords = (words) => {
    if (words) {
      const unLimitWords = words.split(" ");
      //   console.log(unLimitWords);
      let limittedWord = [];
      for (let i = 0; i < 28; i++) {
        limittedWord.push(unLimitWords[i]);
      }
      return limittedWord.join(" ").concat("...");
    }
    return null;
  };

  const limittedOverView = limitWords(selectedMovieData?.overview);

  useEffect(() => {
    getSelectedMovieData();
  }, []);

  //   SEARCH
  function sanitizeInput(input) {
    return DOMPurify.sanitize(input);
  }

  const [searchKeyword, setSearchKeyword] = useState("");
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  const handleChangeSearch = (e) => {
    const sanitizedInput = sanitizeInput(e.target.value);
    setSearchKeyword(sanitizedInput);
  };

  //   console.log(shouldFetch);
  const {
    data: searchMoviesData,
    isLoading,
    refetch: searchRefetch,
  } = useSearchMovies(searchKeyword, shouldFetch);

  // Update movie results ketika data tersedia

  useEffect(() => {
    if (!searchKeyword) {
      setShouldFetch(false);
    }
    if (searchMoviesData) {
      setMovieSearchResults(searchMoviesData);
    }
  }, [searchMoviesData, searchKeyword]);

  const handleSearchMovie = async (e) => {
    e.preventDefault();
    if (!searchKeyword.trim() || searchKeyword === undefined) return;
    setShouldFetch(true); // Trigger fetch data
    await searchRefetch();
  };

  // console.log(movieSearchResults);
  console.log(shouldFetch);

  const ShowMovies = () => {
    if (!movieSearchResults.length || !shouldFetch) return <PopularMovie />;
    return (
      <div id="search-movies" className="sm:w-2/3 w-10/12 mt-4">
        <h3>{`Search results for: ${searchKeyword}`}</h3>
        <div className="movie-con w-full h-fit flex justify-between flex-wrap">
          {shouldFetch && <Movie data={searchMoviesData} />}
        </div>
      </div>
    );
  };

  return (
    <>
      {!isPopularMoviesData ? (
        <div className="sm:w-2/3 w-full h-96 mt-10 flex flex-col items-center pr-28">
          <PiSmileySadFill className="text-gray-500 text-5" />
          <h1 className="text-3xl font-medium text-gray-500">ERR Bad Server</h1>
        </div>
      ) : (
        <div
          id="home"
          className="flex flex-col items-center text-stone-300 w-full h-fit"
        >
          <Navbar
            value={searchKeyword}
            onChange={handleChangeSearch}
            onSearch={handleSearchMovie}
          />
          <div id="explore" className="sm:w-2/3 w-10/12 flex flex-col">
            <h2 className="font-bold lg:text-3xl text-xl">Explore</h2>
            <h3 className="text-stone-400 lg:text-xl text-base">
              What are you gonna watch today?
            </h3>
            <div className="img-preview relative mt-3">
              <div className="img w-full sm:h-48 h-32">
                <img
                  src={`${baseImgUrl}${selectedMovieData?.backdrop_path}`}
                  className="w-full h-full object-cover rounded-lg opacity-80"
                  alt=""
                />
              </div>
              <div className="overlay absolute top-0 w-full h-full bg-gradient-to-r from-black from-10% to-transparent opacity-90 rounded-lg"></div>
              <div className="text-preview sm:p-10 p-5 absolute sm:bottom-5 bottom-0 w-3/4">
                <h2>{selectedMovieData?.title}</h2>
                <h3 className="mt-2 font-thin lg:text-xl sm:text-base text-sm">
                  {limittedOverView}
                </h3>
              </div>
            </div>
          </div>
          <ShowMovies />
        </div>
      )}
    </>
  );
};

export default Home;
