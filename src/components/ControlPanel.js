import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTHORS } from "../constants/constants";
import TextField from '@mui/material/TextField';
import '../App.scss';
import Btn from './Btn';
import { addMessageWithFB } from '../middlewares/middleware';
import { useDispatch } from 'react-redux';

const ControlPanel = () => {

    const [value, setValue] = useState('');
    let { chatId } = useParams();
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (value !== '') {
            const newMessage = { text: value, author: AUTHORS.NONAME };
            dispatch(addMessageWithFB(chatId, newMessage));
            setValue('');
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [chatId]);

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
