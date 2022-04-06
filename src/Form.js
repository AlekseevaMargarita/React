import React, { useState } from 'react';
import Btn from './Button';
import Input from './Input';
import './Form.scss';
import PropTypes from 'prop-types';

function Form({ onSubmit }) {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            return;
        }
        setValue('');
        onSubmit(value);
    }

    return (
        <form
            className="Form"
            onSubmit={handleSubmit}>
            <Input
                value={value}
                onChange={handleChange}
            />
            <Btn />
        </form>
    )
}


export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func,
};