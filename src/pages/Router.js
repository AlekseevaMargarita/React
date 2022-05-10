
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Chats from '../pages/Chats';
import '../App.scss';
import NoMatch from './NoMatch';
import Messages from '../components/Messages';
import Facts from './Facts';


const Router = () => (
    <BrowserRouter>
        <header className="App__header">
            <ul>
                <li>
                    <Link to="/">Home</Link >
                </li>
                <li>
                    <Link to="/profile">Profile</Link >
                </li>
                <li>
                    <Link to="/chats">Chats</Link >
                </li>
                <li>
                    <Link to="/facts">Daily cat facts!</Link >
                </li>
            </ul>
        </header>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats" element={<Chats />}>
                <Route path=":chatId" element={<Messages />} />
            </Route>
            <Route path="facts" element={<Facts />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>

    </BrowserRouter>
);

export default Router;