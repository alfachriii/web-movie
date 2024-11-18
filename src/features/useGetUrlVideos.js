import { useQuery } from "@tanstack/react-query"
import { api } from "./configAxios"

const apiKey = import.meta.env.VITE_API_KEY

export const useGetUrlVideos = (id) => {
    return useQuery({
        queryKey: ["videos_movie", id],
        queryFn: async () => {
            const response = await api.get(`3/movie/${id}/videos?api_key=${apiKey}`)
            return response.data.results[1]
        }
    })
}