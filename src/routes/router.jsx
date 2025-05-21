import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCampaign from "../pages/AddCampaign";
import RunningCampaign from "../components/RunningCampaign";
import Register from "../pages/Register";


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
])

export default router
