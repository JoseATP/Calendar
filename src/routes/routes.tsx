import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import ReminderForm from "../pages/ReminderForm/ReminderForm.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addReminder/:id?",
    element: <ReminderForm />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
