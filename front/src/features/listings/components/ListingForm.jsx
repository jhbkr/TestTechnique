import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";

const schema = z.object({
  title: z.string().min(3, "Au moins 3 caractères"),
  city: z.string().min(2, "Ville obligatoire"),
  type: z.string().nonempty("Type requis"),
  rent: z.coerce.number().positive("Loyer positif"),
  description: z.string().min(10, "Description trop courte"),
});

export default function ListingForm({ initial, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: initial ?? {
      title: "",
      city: "",
      type: "",
      rent: 0,
      description: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md bg-white p-6 rounded shadow"
    >
      {/* Champ Titre */}
      <div>
        <input
          {...register("title")}
          placeholder="Titre"
          className="w-full border p-2 rounded"
        />
        {errors.title && (
          <p className="text-red-600 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* affichage des villes */}
      <div>
        <input
          {...register("city")}
          placeholder="Ville"
          className="w-full border p-2 rounded"
        />
        {errors.city && (
          <p className="text-red-600 text-sm">{errors.city.message}</p>
        )}
      </div>

      {/* type de logement*/}
      <div>
        <input
          {...register("type")}
          placeholder="Type (T1, T2, studio…) "
          className="w-full border p-2 rounded"
        />
        {errors.type && (
          <p className="text-red-600 text-sm">{errors.type.message}</p>
        )}
      </div>

      {/* pour le montant du loyer */}
      <div>
        <input
          type="number"
          {...register("rent", { valueAsNumber: true })}
          placeholder="Loyer (€)"
          className="w-full border p-2 rounded"
        />
        {errors.rent && (
          <p className="text-red-600 text-sm">{errors.rent.message}</p>
        )}
      </div>

      {/* Desc du loyer*/}
      <div>
        <textarea
          {...register("description")}
          placeholder="Description"
          className="w-full border p-2 rounded"
          rows={4}
        />
        {errors.description && (
          <p className="text-red-600 text-sm">{errors.description.message}</p>
        )}
      </div>

      <button
        disabled={loading}
        className="w-full py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? "En cours…" : "Enregistrer"}
      </button>
    </form>
  );
}

ListingForm.propTypes = {
  initial: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
