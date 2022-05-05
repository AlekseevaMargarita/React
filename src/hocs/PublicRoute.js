/* import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/AuthProvider";


const PublicRoute = () => {
    const location = useLocation();
    const auth = useAuth();

    if (auth.user) {
        return
    }

    return <Outlet />;
};

export default PublicRoute; */