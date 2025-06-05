import ListingCard from "../components/ListingCard.jsx";
import { useListings } from "../hooks/useListings.js";

export default function ListPage() {
  const { data, isLoading, isError } = useListings();

  if (isLoading) return <p className="p-4">Chargement…</p>;
  if (isError)   return <p className="p-4 text-red-500">Pas de connexion</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Annonces disponibles</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
