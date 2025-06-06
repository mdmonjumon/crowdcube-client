import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children;
    }
    return (
        <div>
            <Navigate to='/login' state={location.pathname}
            ></Navigate>
            
        </div>
    );
};

export default PrivateRoute;