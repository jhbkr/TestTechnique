import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/* entête du site */}
      <header
        className="bg-gradient-to-r
                   from-[#1C1B48] via-[#50439E] to-[#9F46B3]
                   text-white px-4 py-3 flex justify-between items-center shadow"
      >
        <Link to="/" className="font-bold text-lg tracking-wide">
          ColocApp 
        </Link>

        <Link
          to="/new"
          className="bg-[#F78E3D] hover:bg-[#d97627]
                     transition-colors px-4 py-1.5 rounded-md
                     text-sm font-semibold text-white shadow"
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
