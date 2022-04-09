
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Chats from '../pages/Chats';


const Router = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>Home</Link >
                </li>
                <li>
                    <Link to='/profile'>Profile</Link >
                </li>
                <li>
                    <Link to='/chats'>Chats</Link >
                </li>
            </ul>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="/chats" exact element={<Chats />} />

            </Routes>

        </BrowserRouter>
    )
};

export default Router;