import React from 'react'
import Navbar from '../components/Navbar'
import movieScene from "../assets/movieclips/movie-scenes.jpg"
import movieScene2 from "../assets/movieclips/scene2.png"
import PopularMovie from './components/PopularMovie'
import { useFetchMovies } from '../features/useFetchMovies'
import { useAddToLocalStorage } from '../features/useAddToLocalStorage'

const Home = () => {
    const { data: dataMovies, isLoading: isLoadingFetchMovie, isError } = useFetchMovies();



    console.log(isError)
    useAddToLocalStorage("movies", dataMovies?.data.results)

  return (
    <div id="home" className="flex flex-col items-center text-stone-300 w-full h-fit">
        <Navbar />
        <div id="explore" className="sm:w-2/3 w-10/12 flex flex-col">
            <h2 className="font-bold lg:text-3xl text-xl">Explore</h2>
            <h3 className="text-stone-400 lg:text-xl text-base">What are you gonna watch today?</h3>
            <div className="img-preview relative mt-3">
                <div className="img w-full sm:h-48 h-32">
                    <img src={movieScene} className="w-full h-full object-cover rounded-lg opacity-80" alt="" />
                </div>
                <div className="overlay absolute top-0 w-full h-full bg-gradient-to-r from-black from-10% to-transparent opacity-90 rounded-lg"></div>
                <div className="text-preview sm:p-10 p-5 absolute sm:bottom-5 bottom-0 w-3/4">
                    <h2>Joker</h2>
                    <h3 className="mt-2 font-thin lg:text-xl sm:text-base text-sm">Arthur Fleck, a party clown, lives in difficult circumstances with his sickly mother. Because people thought he was strange, he decided to turn evil and create chaos.</h3>
                </div>
            </div>
        </div>
        <PopularMovie />
    </div>
    
  )
}

export default Home