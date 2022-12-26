import React, {useContext} from 'react';
import {AuthContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children})=>{
    const {currentUser, loading} = useContext(AuthContext);

    if (loading){
        return <div className='container text-center'>Loading...</div>
    }

    if (currentUser && currentUser.userID){
       return children;
    }

    return <Navigate to='/login'></Navigate>

}

export default PrivateRoute;