import ListingCard from "../components/ListingCard.jsx";
import { useListings } from "../hooks/useListings.js";

export default function ListPage() {
  const { data, isLoading, isError } = useListings();

  if (isLoading)
    return <p className="p-6 text-[#1C1B48]">Chargement…</p>;
  if (isError)
    return <p className="p-6 text-[#E44D70]">Pas de connexion</p>;

  return (
    <div className="p-6 min-h-screen bg-[#F9FAFB]">
      <h1 className="text-3xl font-bold mb-6 text-[#1C1B48]">Annonces disponibles</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
