import { useQuery } from "@tanstack/react-query"
import { api } from "./configAxios"

const apiKey = import.meta.env.VITE_API_KEY

export const useGetGenreLists = async () => {
    try {
        const response = await api.get(`3/genre/movie/list?api_key=${apiKey}`)
        // const data = []
        // for(let i; i <= 10; i++) {
        //     data.push(response[i])
        // }
        return response
      }catch(err) {
        return []
      }
}