import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header className="bg-slate-800 text-white px-4 py-3 flex justify-between">
        <Link to="/" className="font-bold">
          ColocApp
        </Link>
        <Link
          to="/new"
          className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
        >
          Nouvelle annonce
        </Link>
      </header>

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <Outlet />
      </main>
    </>
  );
}
