import React, { useEffect } from 'react';
import { AUTHORS } from '../constants/constants';
import { useTheme } from '@emotion/react';
import '../App.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMessagesByChatId } from '../store/messages/selectors';
import { initUserData } from '../middlewares/middleware';
import { selectUserName } from '../store/profile/selectors';

const MessageList = () => {
    const theme = useTheme();
    const { chatId } = useParams();
    const messages = useSelector(selectMessagesByChatId(chatId));
    const dispatch = useDispatch();
    const profileName = useSelector(selectUserName, shallowEqual);

    useEffect(() => {
        dispatch(initUserData());
    }, []);

    return (
        messages?.map((item, index) => (
            <div className={`Message ${item.author === AUTHORS.BOT ? "Message-green" : "Message-blue"}`}
                key={index}
                style={{
                    borderColor: theme.palette.primary.main
                }}>
                <p className='Message__text'> {item.text}</p>
                <span className="Message__author">{item.author === AUTHORS.NONAME ? profileName : item.author}</span>
            </div >
        )) || null
    );
};

export default MessageList;
