import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import ControlPanel from './ControlPanel';

const Messages = ({ chats, addMessage }) => {

    const { chatId } = useParams();

    if (!chats[chatId]) {
        return (<Navigate to="/chats" replace />)
    }

    const messages = chats[chatId].messages;

    return (
        <div className="wrap__messages">
            <MessageList messages={messages} />
            <ControlPanel addMessage={addMessage} />
        </div>
    )
};

export default Messages;

Messages.propTypes = {
    chats: PropTypes.object,
    addMessage: PropTypes.func,
}