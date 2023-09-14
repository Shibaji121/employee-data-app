import React from "react";
import Registration from "./Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeList from "./EmployeeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/details",
    element: <EmployeeList />,
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
