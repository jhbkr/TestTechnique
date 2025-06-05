// le crud
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/axios";

export const useCreateListing = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => api.post("/listings", payload).then((r) => r.data),
    onSuccess: () => qc.invalidateQueries(["listings"]),
  });
};

export const useUpdateListing = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...rest }) =>
      api.put(`/listings/${id}`, rest).then((r) => r.data),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries(["listings"]);
      qc.invalidateQueries(["listing", id]);
    },
  });
};

export const useDeleteListing = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/listings/${id}`),
    onSuccess: () => qc.invalidateQueries(["listings"]),
  });
};
