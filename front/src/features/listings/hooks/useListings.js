import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/axios";

// récupère les annonces pour les montrer 

export const useListings = (params = {}) =>
  useQuery({
    queryKey: ["listings", params],
    queryFn: async () => {
      const res = await api.get("/listings", { params });
      //affiche le tableau des annonces
      return res.data;
    },
  });
