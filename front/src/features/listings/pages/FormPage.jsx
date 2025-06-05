import { useParams, useNavigate } from "react-router-dom";
import {
  useCreateListing,
  useUpdateListing,
} from "../hooks/useListingMutations.js";
import { useListing } from "../hooks/useListing.js";
import ListingForm from "../components/ListingForm.jsx";

export default function FormPage({ mode }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const create = useCreateListing();
  const update = useUpdateListing();

  const { data: existing } = useListing(id);

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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {mode === "modifier" ? "Modifier l’annonce" : "Nouvelle annonce"}
      </h1>

      <ListingForm
        initial={mode === "modifier" ? existing : undefined}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
}
