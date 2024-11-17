import { useQuery } from "@tanstack/react-query";
import { api } from "./configAxios";

export const useFetchPopularMovies = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  return useQuery({
    queryKey: ["popular_movie"],
    queryFn: async () => {
      const response = await api.get(`3/movie/popular?api_key=${apiKey}`);
      return response;
    },
  });
};
