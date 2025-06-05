// le détail des annonces 
import { useParams, useNavigate, Link } from "react-router-dom";
import {useDeleteListing } from "../hooks/useListingMutations.js";
import { useListing as useListingQuery } from "../hooks/useListing.js";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useListingQuery(id);
  const { mutate: deleteListing, isPending } = useDeleteListing();

  if (isLoading) return <p className="p-4">Chargement…</p>;
  if (!data) return <p className="p-4">Annonce inconnue</p>;

  return (
    <div className="p-6 space-y-4 max-w-xl">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p>{data.city}</p>
      <p className="text-xl font-semibold">{data.rent} €</p>
      <p>{data.description}</p>

      <div className="flex gap-3">
        <Link
          to={`/${id}/edit`}
          className="px-3 py-2 bg-amber-500 text-white rounded"
        >
          Modifier
        </Link>
        <button
          onClick={() =>
            deleteListing(id, {
              onSuccess: () => navigate("/"),
            })
          }
          disabled={isPending}
          className="px-3 py-2 bg-red-600 text-white rounded disabled:opacity-50"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
