// src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import ListPage from "@/features/listings/pages/ListPage.jsx";
import DetailPage from "@/features/listings/pages/DetailPage.jsx";
import FormPage from "@/features/listings/pages/FormPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <ListPage /> },          // liste
      { path: "new", element: <FormPage mode="create" /> }, // création
      { path: ":id", element: <DetailPage /> },        // détail
      { path: ":id/edit", element: <FormPage mode="edit" /> }, // édition
    ],
  },
]);
