import { useQuery } from "@tanstack/react-query"
import { api } from "./configAxios"

const apiKey = import.meta.env.VITE_API_KEY

export const useFetchUpcomingMovies = () => {
    return useQuery({
        queryKey: ["upcoming_movies"],
        queryFn: async () => {
            const response = await api.get(`3/movie/upcoming?api_key=${apiKey}`)
            return response
        }
    })
}