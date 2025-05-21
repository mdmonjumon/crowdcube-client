import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCampaign from "../pages/AddCampaign";
import RunningCampaign from "../components/RunningCampaign";
import Register from "../pages/Register";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[
            {
                path:'/',
                element:<RunningCampaign></RunningCampaign>,
                loader: ()=> fetch('http://localhost:5000/allCampaign')
            }
        ]
    },

    {
        path:'/addCampaign',
        element:<AddCampaign></AddCampaign>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/login',
        element: <Login></Login>
    },
])

export default router
