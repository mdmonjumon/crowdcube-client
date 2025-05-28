import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCampaign from "../pages/AddCampaign";
import RunningCampaign from "../components/RunningCampaign";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../providers/PrivateRoute";
import AllCampaigns from "../pages/AllCampaigns";
import DetailsPage from "../pages/DetailsPage";
import MyCampaign from "../pages/MyCampaign";
import UpdateCampaign from "../pages/UpdateCampaign";
import MyDonations from "../pages/MyDonations";
import Error from "../pages/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <RunningCampaign></RunningCampaign>,
                loader: () => fetch('https://crowdcube-server-ten.vercel.app/runningCampaign')
            }
        ]
    },

    {
        path: '/campaigns',
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch('https://crowdcube-server-ten.vercel.app/allCampaign')
    },
    {
        path: '/addCampaign',
        element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>
    },
    {
        path: '/myCampaign',
        element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
        loader: () => fetch('https://crowdcube-server-ten.vercel.app/allCampaign')
    },

    {
        path:'/myDonations',
        element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
        loader: () => fetch('https://crowdcube-server-ten.vercel.app/donations')
    },

    {
        path: '/updateCampaign/:id',
        element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
        loader: ({ params }) => fetch(`https://crowdcube-server-ten.vercel.app/campaign/${params.id}`)
    },

    {
        path: '/campaign/:id',
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
        loader: ({ params }) => fetch(`https://crowdcube-server-ten.vercel.app/campaign/${params.id}`)
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
