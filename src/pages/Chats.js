import React from 'react';
import '../App.scss';
import ChatList from '../components/ChatList';
import { Outlet } from 'react-router-dom';

const Chats = () => {

    return (
        <>
            <h1>Chats</h1>
            <div className='wrap'>
                <ChatList />
                <Outlet />
            </div>
        </>
    );
};

export default Chats;

