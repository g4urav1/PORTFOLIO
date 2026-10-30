import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./component/Pages/home";
import Parent from "./component/Pages/parent";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Parent />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  );

  return <RouterProvider router={router} />;
}

export default App;
