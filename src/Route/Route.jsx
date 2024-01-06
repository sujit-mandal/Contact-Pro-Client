import { createBrowserRouter } from "react-router-dom";
import AllContacts from "../Pages/AllContacts";
import MainLayout from "../Layout/MainLayout";
import AddContact from "../Pages/AddContact";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AllContacts />,
      },
      {
        path: "/add-contact",
        element: <AddContact />,
      },
    ],
  },
]);

export default route;
