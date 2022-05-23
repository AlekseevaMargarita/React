import React from 'react';
import { Navigate, Outlet } from "react-router-dom"
import useAuth from '../hooks/AuthProvider';


const PublicRoute = () => {
    const auth = useAuth();

    if (auth.user) {
        return <Navigate to="/profile" />
    }

    return <Outlet />;
};

export default PublicRoute;