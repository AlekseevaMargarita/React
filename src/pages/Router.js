
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Chats from '../pages/Chats';
import { initialChats } from '../constants/constants';
import '../App.scss';
import NoMatch from './NoMatch';
import Messages from '../components/Messages';


const Router = () => {
    const [chats, setChats] = useState(initialChats);

    const addMessage = (chatId, message) => {
        setChats({
            ...chats, [chatId]: {
                name: chats[chatId].name,
                messages: [...chats[chatId].messages, message]
            }
        })
    }

    return (
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
                </ul>
            </header>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chats" element={<Chats chats={chats} />}>
                    <Route path=":chatId" element={<Messages chats={chats} addMessage={addMessage} />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>

        </BrowserRouter>
    )
};

export default Router;