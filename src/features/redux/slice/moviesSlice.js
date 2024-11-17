import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// const [moviesData, setMoviesData] = useState({})

const getMoviesFromLocal = (name) => {
  const isMovies = localStorage.getItem(name);
  if (!isMovies) return [];

  if (isMovies) {
    try {
      return JSON.parse(localStorage.getItem(name));
    } catch (err) {
      console.error("Value 'movies' di localstorage: undefined");
      return []
    }
  }
};

// getMoviesFromLocal()

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popular: {
        data: getMoviesFromLocal("popular_movies") 
    },
    upcoming: {
        data: getMoviesFromLocal("upcoming_movies")
    }
  },
  reducers: {
    addMovie(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
