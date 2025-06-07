import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
  return (
    <Link to={`/${listing.id}`} className="block">
      <article
        className={clsx(
          "rounded-xl bg-white shadow-md border border-[#50439E]/10 p-4",
          "flex flex-col gap-2 transition-shadow hover:shadow-xl hover:border-[#9F46B3]"
        )}
      >
        <h2 className="text-lg font-semibold text-[#1C1B48]">
          {listing.title}
        </h2>
        <p className="text-sm text-[#50439E]">{listing.city}</p>
        <span className="text-xl font-bold text-[#F78E3D]">
          {listing.rent} €
        </span>
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
