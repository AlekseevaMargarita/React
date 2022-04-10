import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTHORS } from "../constants/constants";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';
import '../App.scss';
import { useTheme } from '@emotion/react';

const ControlPanel = ({ addMessage }) => {
    const theme = useTheme();
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
            />
            <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                style={{
                    padding: theme.button.padding
                }}>
                Отправить
            </Button>
        </form>
    )
}

export default ControlPanel;

ControlPanel.propTypes = {
    addMessage: PropTypes.func,
}