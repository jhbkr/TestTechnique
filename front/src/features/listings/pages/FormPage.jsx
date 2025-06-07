import { useParams, useNavigate } from "react-router-dom";
import {
  useCreateListing,
  useUpdateListing,
} from "../hooks/useListingMutations.js";
import { useListing } from "../hooks/useListing.js";
import ListingForm from "../components/ListingForm.jsx";

export default function FormPage({ mode }) {
  const navigate   = useNavigate();
  const { id }     = useParams();
  const create     = useCreateListing();
  const update     = useUpdateListing();

  const { data: existing, isLoading } = useListing(id);

  const handleSubmit = (payload) => {
    if (mode === "edit") {
      update.mutate(
        { id, ...payload },
        { onSuccess: () => navigate(`/${id}`) }
      );
    } else {
      create.mutate(payload, { onSuccess: () => navigate("/") });
    }
  };

  const loading = create.isPending || update.isPending;

  /* on fait un écran de chargement avant de pouvoir faire la modif de l'annonce */
  if (mode === "edit" && isLoading) return <p className="p-4">Chargement…</p>;

return (
  <div className="flex justify-center pt-12">
    <div className="w-full max-w-lg px-6">
      <h1 className="text-3xl font-bold mb-6 text-[#1C1B48]">
        {mode === "edit" ? "Modifier l’annonce" : "Nouvelle annonce"}
      </h1>

      <ListingForm
        initial={mode === "edit" ? existing : undefined}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  </div>
)
};
