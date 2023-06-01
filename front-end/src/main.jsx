import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./rotas/App.jsx"
import Start from "./rotas/Start.jsx"
import Mid from "./rotas/Mid.jsx"
import ErrorPage from "./error-page.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// Cria o roteador de navegação com as configurações de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Start/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "cadastro/1",
    element: <App />,
  },
  {
    path: "telameio/2",
    element: <Mid />,
  },
  {
    path: "inicio/3",
    element: <Start />,
  },
]);

// Renderiza o aplicativo na raiz do documento
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
