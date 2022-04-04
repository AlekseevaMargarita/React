import React, { useEffect, useRef } from 'react';
import './Input.scss';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';


function Input(props) {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    })

    return (
        <TextField
            id="outlined-basic"
            label="Введите сообщение"
            variant="outlined"
            value={props.value}
            onChange={props.onChange}
            /* autoFocus="true" */
            inputRef={inputRef}
        />
    )
}


export default Input;

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
