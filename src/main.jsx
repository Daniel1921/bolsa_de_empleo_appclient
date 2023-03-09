import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegistroCiudadanos } from "./components/RegistroCiudadanos";
import { AdministracionCiudadanos } from "./components/AdministracionCiudadanos";
import { ModificarCiudadano } from "./components/ModificarCiudadano";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistroCiudadanos />,
  },
  {
    path: "/AdministracionCiudadanos",
    element: <AdministracionCiudadanos />,
  },
  {
    path: "/actualizarCiudadano/:id",
    element: <ModificarCiudadano />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
