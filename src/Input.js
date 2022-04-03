import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';


function Input(props) {

    return (
        <input
            type="text"
            className="Input"
            value={props.value}
            onChange={props.onChange}
            placeholder="Введите сообщение"
        />
    )
}

export default Input;

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
