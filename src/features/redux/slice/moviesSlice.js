import { createSlice } from "@reduxjs/toolkit";

const getMoviesFromLocal = () => {
    const isMovies = localStorage.getItem("movies")
    if(isMovies === undefined) return null
    if(isMovies) return JSON.parse(localStorage.getItem("movies"))
}

// getMoviesFromLocal()

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        data: getMoviesFromLocal() || [],
    },
    reducers: {
        addMovie(state, action) {
            state.data.push(action.payload)
        }
    }
})

export const { addMovie } = moviesSlice.actions
export default moviesSlice.reducer 