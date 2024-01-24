import Home from "../components/Home";

export const routes = [
  {
    id: 1,
    element: <Home />,
    path: "/",
  },
  {
    id: 2,
    element: <h1>About</h1>,
    path: "/about",
  },
  {
    id: 3,
    element: <h1>Projects</h1>,
    path: "/projects",
  },
  {
    id: 4,
    element: <h1>Contact</h1>,
    path: "/contact",
  },
];