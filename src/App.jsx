import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import Dashboard, { dashboardLoader } from "./Pages/Dashboard";
import Error from "./pages/Error";

//Layouts
import Main, { mainLoader } from "./layout/Main";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        element: <p>logged out!</p>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
