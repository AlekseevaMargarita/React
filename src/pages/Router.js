
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Chats from '../pages/Chats';
import '../App.scss';
import NoMatch from './NoMatch';
import Messages from '../components/Messages';
import Facts from './Facts';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { AuthProvider } from '../hooks/AuthProvider';
import PrivateRoute from '../hocs/PrivateRoute';
import PublicRoute from '../hocs/PublicRoute';

const Router = () => (
    <BrowserRouter>
        <AuthProvider>
            <header className="App__header">
                <ul>
                    <li>
                        <Link to="/">Вход/Регистрация</Link >
                    </li>
                    <li>
                        <Link to="/profile">Профиль</Link >
                    </li>
                    <li>
                        <Link to="/chats">Чаты</Link >
                    </li>
                    <li>
                        <Link to="/facts">Ерунда о котах</Link >
                    </li>
                </ul>
            </header>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/" exact element={<Home />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="signin" element={<Signin />} />
                </Route>

                <Route element={<PrivateRoute />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="chats" element={<Chats />}>
                        <Route path=":chatId" element={<Messages />} />
                    </Route>
                </Route>

                <Route path="facts" element={<Facts />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AuthProvider>

    </BrowserRouter >
);

export default Router;