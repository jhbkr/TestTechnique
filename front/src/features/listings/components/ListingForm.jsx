import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";

const schema = z.object({
  title: z.string().min(3, "Au moins 3 caractères"),
  city: z.string().min(2, "Ville obligatoire"),
  type: z.string().nonempty("Type de logement requi"),
  rent: z.coerce.number().positive("Le loyer ne peut pas être négatif !!!!"),
  description: z.string().min(10, "Description trop courte pour le logement proposé"),
});

export default function ListingForm({ initial, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    //si j'ai envie de fetch une api qui va générer des images, faut mettre un setValue
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

      className="space-y-4 bg-white/95 backdrop-blur
                 border border-[#50439E]/30 shadow-lg
                 rounded-xl p-6 max-w-lg"
    >
      {/* titre de l'annonce*/}
      <div>
        <input
          {...register("title")}
          placeholder="Titre"
          className="w-full border border-[#1C1B48]/40 rounded p-2
                     outline-none focus:border-[#9F46B3] transition-colors"
        />
        {errors.title && (
          <p className="text-[#E44D70] text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* ville où se trouve le logement */}
      <div>
        <input
          {...register("city")}
          placeholder="Ville"
          className="w-full border border-[#1C1B48]/40 rounded p-2
                     outline-none focus:border-[#9F46B3] transition-colors"
        />
        {errors.city && (
          <p className="text-[#E44D70] text-sm">{errors.city.message}</p>
        )}
      </div>

      {/* Type du logement */}
      <div>
        <input
          {...register("type")}
          placeholder="Type (T1, T2, studio…)"
          className="w-full border border-[#1C1B48]/40 rounded p-2
                     outline-none focus:border-[#9F46B3] transition-colors"
        />
        {errors.type && (
          <p className="text-[#E44D70] text-sm">{errors.type.message}</p>
        )}
      </div>

      {/* montant du loyer */}
      <div>
        <input
          type="number"
          {...register("rent", { valueAsNumber: true })}
          placeholder="Loyer (€)"
          className="w-full border border-[#1C1B48]/40 rounded p-2
                     outline-none focus:border-[#9F46B3] transition-colors"
        />
        {errors.rent && (
          <p className="text-[#E44D70] text-sm">{errors.rent.message}</p>
        )}
      </div>

      {/* descriptiond e l'annoce */}
      <div>
        <textarea
          {...register("description")}
          placeholder="Description"
          rows={4}
          className="w-full border border-[#1C1B48]/40 rounded p-2
                     outline-none focus:border-[#9F46B3] transition-colors"
        />
        {errors.description && (
          <p className="text-[#E44D70] text-sm">{errors.description.message}</p>
        )}
      </div>

      <button
        disabled={loading}
        className="w-full py-2 rounded font-semibold text-white
                   bg-[#F78E3D] hover:bg-[#D97627] transition-colors
                   disabled:opacity-50"
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
