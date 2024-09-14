import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import Jobs from "./pages/jobs/Jobs.jsx";
import JobDetails from "./pages/jobDetail/JobDetails.jsx";
import { Login } from "./pages/auth/Login.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
