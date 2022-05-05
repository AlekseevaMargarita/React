import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.scss';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div className='home__wrap'>
                <div className='home__link-wrap'>
                    <Link to={"/signin"}>Вход</Link>
                    <Link to={"/signup"}>Регистрация</Link>
                </div>
                <Outlet />
            </div>
        </>
    )
};

export default Home;