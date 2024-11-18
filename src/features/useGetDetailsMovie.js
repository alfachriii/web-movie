import { useQuery } from "@tanstack/react-query";
import { api } from "./configAxios";

export const useGetDetailsMovie = (id) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  return useQuery({
    queryKey: ["movieDetails"],
    queryFn: async () => {
      const response = await api.get(`3/movie/${id}?api_key=${apiKey}`);
      if(!response?.data) return []
      return response;
    },
  });
};
