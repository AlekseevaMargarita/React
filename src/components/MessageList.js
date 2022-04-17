import React from 'react';
import { AUTHORS } from '../constants/constants';
import { useTheme } from '@emotion/react';
import '../App.scss'
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const MessageList = () => {
    const theme = useTheme();
    const profileName = useSelector(state => state.profile.name, shallowEqual);
    const { chatId } = useParams();
    const messages = useSelector(state => state.messages[chatId], shallowEqual);

    return (messages.map((item, index) => (
        <div className={`Message ${item.author === AUTHORS.BOT ? "Message-green" : "Message-blue"}`}
            key={index}
            style={{
                borderColor: theme.palette.primary.main
            }}>
            <p className='Message__text'> {item.text}</p>
            <span className="Message__author">{item.author === AUTHORS.NONAME ? profileName : item.author}</span>
        </div >
    ))
    );
};

export default MessageList;
