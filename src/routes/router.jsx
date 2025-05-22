import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCampaign from "../pages/AddCampaign";
import RunningCampaign from "../components/RunningCampaign";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../providers/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <RunningCampaign></RunningCampaign>,
                loader: () => fetch('http://localhost:5000/allCampaign')
            }
        ]
    },

    {
        path: '/addCampaign',
        element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
])

export default router
