import { createRoot } from "react-dom/client";
import "./styles/app.css";
import "flowbite";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
