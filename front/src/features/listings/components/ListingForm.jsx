import { useState } from "react";

export default function ListingForm({ initial, onSubmit, loading }) {
  const [form, setForm] = useState(
    initial || { title: "", city: "", rent: 0, type: "", description: "" }
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4 max-w-md"
    >
      {["title", "city", "type"].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field}
          className="w-full border p-2 rounded"
          required
        />
      ))}

      <input
        type="number"
        name="rent"
        value={form.rent}
        onChange={handleChange}
        placeholder="Loyer"
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded"
        required
      />

      <button
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? "En cours…" : "Enregistrer"}
      </button>
    </form>
  );
}
