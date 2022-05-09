import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from '../hooks/AuthProvider';

const PrivateRoute = () => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/signin" state={{ from: location }} />
    }

    return <Outlet />;
};

export default PrivateRoute;