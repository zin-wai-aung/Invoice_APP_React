import { createRoot } from "react-dom/client";
import "./index.css";
import "flowbite";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
