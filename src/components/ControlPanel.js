import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTHORS } from "../constants/constants";
import TextField from '@mui/material/TextField';
import '../App.scss';
import Btn from './Btn';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messages/action';
import { selectMessagesByChatId } from '../store/messages/selectors';

const ControlPanel = () => {

    const [value, setValue] = useState('');
    let { chatId } = useParams();
    const getMessagesByChatId = useMemo(
        () => selectMessagesByChatId(chatId), [chatId]
    );
    const messages = useSelector(getMessagesByChatId);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onAddMessage = (chatId, message) => {
        dispatch(addMessage(chatId, message));
    };

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const messageId = `id${Date.now()}`;
        if (value !== '') {
            const newMessage = { messageId, text: value, author: AUTHORS.NONAME };
            onAddMessage(chatId, newMessage);
            setValue('');
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        inputRef.current?.focus;
    }, []);

    useEffect(() => {
        let timerId;
        if (
            messages.length !== 0 &&
            messages[messages.length - 1].author !== AUTHORS.BOT
        ) {
            const messageId = `id${Date.now()}`;
            const botMessage = { messageId, text: 'Ваше сообщение прочитано', author: AUTHORS.BOT };
            timerId = setTimeout(() => {
                dispatch(addMessage(chatId, botMessage));
            }, 1500);
        }

        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [messages, chatId]);

    return (
        <form
            className="Form"
            onSubmit={handleClick}>
            <TextField
                id="outlined-basic"
                label="Введите сообщение"
                variant="outlined"
                value={value}
                onChange={handleInput}
                inputRef={inputRef}
                autoFocus
            />
            <Btn buttonLabel="Отправить" />
        </form>
    )
}

export default ControlPanel;
