import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import ListPage from "@/features/listings/pages/ListPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <ListPage /> },
      // on ajoutera plus tard : FormPage, DetailPage …
    ],
  },
]);
