import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../components";
import {ErrorPage, HomePage, LoginPage, RegisterPage, DashboardPage} from "../pages"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [{
            errorElement: <ErrorPage />,
            children: [{
                index: true,
                element: <HomePage />
            }, {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/dashboard",
                element: <DashboardPage />
            }
        ]
        }]
    }
])