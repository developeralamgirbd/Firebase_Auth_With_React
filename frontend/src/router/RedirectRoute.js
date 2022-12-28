import React from 'react';
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

function RedirectRoute({children}) {
    const {currentUser, loading} = useAuth();

    if (loading){
        return <div>loading...</div>
    }

    if (currentUser && currentUser.userID){
        return <Navigate to='/home'></Navigate>
    }else {
        return children
    }
}

export default RedirectRoute;