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
import GoToMovieDetails from "../components/GoToMovieDetails";
import MovieListLoading from "./components/MovieListLoading";
import SelectedMovieLoading from "./components/SelectedMovieLoading";

const Home = () => {
  const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;
  const {
    data: dataPopularMovies,
    isLoading: isLoadingFetchPopularMovie,
    isError: isErorrFetchPopularMovie,
  } = useFetchPopularMovies();

  // const [isPopularMoviesData, setIsPopularMoviesData] = useState(false);

  // useEffect(() => {
  //   if (!popularMoviesData.lenght) setIsPopularMoviesData(false);
  //   if (popularMoviesData) setIsPopularMoviesData(true);
  // }, [popularMoviesData]);

  const [selectedMovieData, setSelectedMovieData] = useState(null);
  const getSelectedMovieData = () => {
    const random = Math.floor(Math.random() * 21);

    setSelectedMovieData(dataPopularMovies?.data.results[random]);
  };

  useEffect(() => {
    if (dataPopularMovies?.data?.results && !selectedMovieData) {
      getSelectedMovieData();
    }
  }, [dataPopularMovies, selectedMovieData]);
  // console.log(selectedMovieData)

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const limitWords = (words) => {
    if (words) {
      const unLimitWords = words.split(" ");
      //   console.log(unLimitWords);
      let limittedWord = [];
      if (screenSize.width < 450) {
        for (let i = 0; i < 19; i++) {
          limittedWord.push(unLimitWords[i]);
        }
        return limittedWord.join(" ").concat("...");
      }
      for (let i = 0; i < 28; i++) {
        limittedWord.push(unLimitWords[i]);
      }
      return limittedWord.join(" ").concat("...");
    }
    return null;
  };

  const limittedOverView = limitWords(selectedMovieData?.overview);

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
    isLoading: isLoadingSearch,
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

  const ShowMovies = () => {
    // if (isErorrFetchPopularMovie || !isPopularMoviesData)
    //   return (
    //     <div className="sm:w-2/3 w-10/12 min-h-64 mt-4 flex justify-center items-center text-gray-500">
    //       <h1 className="text-4xl">{":("}</h1>
    //       <h2 className="">Movies data Not Found</h2>
    //     </div>
    //   );
    if (isLoadingFetchPopularMovie || isLoadingSearch)
      return (
        <div id="search-movies" className="sm:w-2/3 w-10/12 mt-4">
          <MovieListLoading />
        </div>
      );

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
          {!dataPopularMovies && isLoadingFetchPopularMovie ? (
            <SelectedMovieLoading />
          ) : (
            <>
              <h2 className="font-bold lg:text-3xl text-xl">Explore</h2>
              <h3 className="text-stone-400 lg:text-xl text-base">
                What are you gonna watch today?
              </h3>
              <GoToMovieDetails id={selectedMovieData?.id}>
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
              </GoToMovieDetails>
            </>
          )}
        </div>
        <ShowMovies />
      </div>
    </>
  );
};

export default Home;
