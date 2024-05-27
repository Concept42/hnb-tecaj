// hooks/useGetTecaj.ts
import { useQuery } from "@tanstack/react-query";
import { fetchWithOptions } from "../fetchFunctions";

const getTecaj = async (date: string) => {
  try {
    const response = await fetchWithOptions(
      `/api/tecaj?date=${date}`,
      {},
      "GET",
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function useGetTecaj(date: string) {
  const { data, ...rest } = useQuery({
    queryKey: ["tecaj", date],
    queryFn: () => getTecaj(date),
    retry: false,
    refetchOnWindowFocus: false,
  });
  const tecaj = data;
  return { ...rest, tecaj };
}
