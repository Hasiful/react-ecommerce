import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/main";
import Home from "../pages/home/home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])