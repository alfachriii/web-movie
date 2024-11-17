import { useQuery } from "@tanstack/react-query";
import { api } from "./configAxios";

const apiKey = import.meta.env.VITE_API_KEY;

const fetchMovies = async (searchKeyword) => {
  if (!searchKeyword) return [];
  const response = await api.get(
    `3/search/movie?query=${searchKeyword}&api_key=${apiKey}`
  );
  return response.data.results; // Sesuaikan dengan struktur data API
};

export const useSearchMovies = (query, isEnabled) => {
  return useQuery({
    queryKey: ["search_movies", query],
    queryFn: () => fetchMovies(query),
    enabled: isEnabled, // Control trigger dengan `enabled`
    refetchOnWindowFocus: false, // Tidak perlu refetch saat window aktif
    retry: false, // Sesuaikan kebutuhan retry
  });
};
