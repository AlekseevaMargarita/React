import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTHORS } from "../constants/constants";
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import '../App.scss';
import Btn from './Btn';

const ControlPanel = ({ addMessage }) => {

    const [value, setValue] = useState('');
    let { chatId } = useParams();
    const inputRef = useRef(null);

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (value !== '') {
            const newMessage = { text: value, author: AUTHORS.NONAME };
            addMessage(chatId, newMessage);
            setValue('');
            inputRef.current?.focus();
        }
    }

    useEffect(() => {
        inputRef.current?.focus;
    }, []);

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

ControlPanel.propTypes = {
    addMessage: PropTypes.func,
}