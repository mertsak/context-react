import { ValoProvider } from "./context/ValoContext";
import { ThemeProvider } from "./context/ThemeContext";
import AgentsPage from "./pages/AgentsPage";
import HomePage from "./pages/HomePage.jsx";
import WeaponsPage from "./pages/WeaponsPage";
import AgentDetailPage from "./pages/AgentDetailPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MapsPage from "./pages/MapsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/agents",
        element: <AgentsPage />,
      },
      {
        path: "agents/:uuid",
        element: <AgentDetailPage />,
      },
      {
        path: "/maps",
        element: <MapsPage />,
      },
      {
        path: "/weapons",
        element: <WeaponsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <ValoProvider>
          <RouterProvider router={router}></RouterProvider>
        </ValoProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
