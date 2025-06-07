// le détail des annonces 
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDeleteListing } from "../hooks/useListingMutations.js";
import { useListing as useListingQuery } from "../hooks/useListing.js";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useListingQuery(id);
  const { mutate: deleteListing, isPending } = useDeleteListing();

  if (isLoading) return <p className="p-4 text-[#1C1B48]">Chargement…</p>;
  if (!data) return <p className="p-4 text-[#E44D70]">Annonce inconnue</p>;

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="p-6 space-y-4 max-w-xl w-full bg-white/95 backdrop-blur border border-[#50439E]/30 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-[#1C1B48]">{data.title}</h1>
        <p className="text-[#6D5EBF]">{data.city}</p>
        <p className="text-xl font-semibold text-[#F78E3D]">{data.rent} €</p>
        <p className="text-[#1C1B48]">{data.description}</p>

        <div className="flex gap-3 pt-2">
          <Link
            to={`/${id}/edit`}
            className="px-4 py-2 rounded font-semibold text-white
                       bg-[#9F46B3] hover:bg-[#7C3790] transition-colors"
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
            className="px-4 py-2 rounded font-semibold text-white
                       bg-[#E44D70] hover:bg-[#c33f5c] transition-colors
                       disabled:opacity-50"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
