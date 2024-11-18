import { useQuery } from "@tanstack/react-query"
import { api } from "./configAxios"

const apiKey = import.meta.env.VITE_API_KEY

export const useFetchMovieGenre = (genreId) => {
    return useQuery({
        queryKey: ["movielist_genre", genreId],
        queryFn: async () => {
            const response = await api.get(`3/discover/movie?with_genres=${genreId}&api_key=${apiKey}`)
            if(!response?.data) return []
            return response
        }
    })
}