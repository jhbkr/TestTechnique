import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
  return (
    <Link to={`/${listing.id}`} className="block">
      <article
        className={clsx(
          "rounded-xl shadow-md p-4 flex flex-col gap-2",
          "hover:shadow-lg transition-shadow bg-white"
        )}
      >
        <h2 className="text-lg font-semibold">{listing.title}</h2>
        <p className="text-sm text-gray-400">{listing.city}</p>
        <span className="text-xl font-bold">{listing.rent} €</span>
      </article>
    </Link>
  );
}

ListingCard.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    city: PropTypes.string,
    rent: PropTypes.number,
  }).isRequired,
};
