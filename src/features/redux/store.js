import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/moviesSlice";

const store = configureStore({
    reducer: { movies: movieReducer}
})

export default store