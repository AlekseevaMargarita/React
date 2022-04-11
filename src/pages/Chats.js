import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import ChatList from '../components/ChatList';
import { Outlet } from 'react-router-dom';

const Chats = ({ chats }) => {


    return (
        <>
            <h1>Chats</h1>
            <div className='wrap'>
                <ChatList chats={chats} />
                <Outlet />
            </div>
        </>
    );
};

export default Chats;

Chats.propTypes = {
    chats: PropTypes.object,
    addMessage: PropTypes.func,
}
