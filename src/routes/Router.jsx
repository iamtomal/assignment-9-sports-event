import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Sponsor from "../pages/Home/Sponsor";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import ServicesDetails from "../pages/Services/ServicesDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('/services.json')
                
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader: ()=> fetch('/services.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:'/sponsor',
                element:<PrivateRoute><Sponsor></Sponsor></PrivateRoute>,
                loader: ()=> fetch('/sponsor.json')
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
export default router;