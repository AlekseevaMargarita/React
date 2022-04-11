import React from 'react';
import PropTypes from 'prop-types';
import { AUTHORS } from '../constants/constants';
import { useTheme } from '@emotion/react';
import '../App.scss'

const MessageList = ({ messages }) => {
    const theme = useTheme();


    return (messages.map((item, index) => (
        <div className={`Message ${item.author === AUTHORS.BOT ? "Message-green" : "Message-blue"}`}
            key={index}
            style={{
                borderColor: theme.palette.primary.main
            }}>
            <p className='Message__text'> {item.text}</p>
            <span className="Message__author">{item.author}</span>
        </div >
    ))
    );
};

export default MessageList;


MessageList.propTypes = {
    messages: PropTypes.array,
}