import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MessageList from './MessageList';
import ControlPanel from './ControlPanel';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChats } from '../store/chats/selectors';

const Messages = () => {

    const { chatId } = useParams();
    const { chats } = useSelector(selectChats, shallowEqual);
    const find = chats.findIndex(item => item.chatId == chatId);

    if (find < 0) {
        return (<Navigate to="/chats" replace />)
    }

    return (
        <div className="wrap__messages">
            <MessageList />
            <ControlPanel />
        </div>
    )
};

export default Messages;
