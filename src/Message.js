import './Message.scss'
import React from 'react';
import { AUTHORS } from './constants';

function Message(props) {

    return (props.items.map((item, index) =>
        <div className={`Message ${item.author === AUTHORS.BOT ? "Message-green" : "Message-blue"}`} key={index} >
            <p className='Message__text' > {item.text}</p>
            <span className="Message__author">{item.author}</span>
        </div >
    ));
}

export default Message;