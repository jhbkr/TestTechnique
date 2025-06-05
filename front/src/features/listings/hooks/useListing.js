//pour les détail
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/axios";

export const useListing = (id) =>
  useQuery({
    enabled: !!id,
    queryKey: ["listing", id],
    queryFn: async () => {
      const res = await api.get(`/listings/${id}`);
      return res.data;
    },
  });
