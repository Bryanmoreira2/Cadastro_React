import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
const Route = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/lista",
        element: <ListUsers />
    },
])

export default Route
