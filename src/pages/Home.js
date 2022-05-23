import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.scss';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div>
                <span>Для общения в чатах необходимо  </span>
                <Link to={"/signin"}>авторизоваться</Link>
            </div>
            <Outlet />

        </>
    )
};

export default Home;