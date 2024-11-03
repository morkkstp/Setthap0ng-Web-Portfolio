import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/home/home";
import Aboutme from "./components/aboutme/aboutme";
import Contact from "./components/contact/contact";
import Skill from "./components/skill/skill";
import Certificate from "./components/certificate/certificate";
import WUCertificate from "./components/wucertificate/wucertificate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/aboutme",
    element: <Aboutme />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/skill",
    element: <Skill />
  },
  {
    path: "/certificate",
    element: <Certificate />
  },
  {
    path: "/wucertificate",
    element: <WUCertificate />
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
