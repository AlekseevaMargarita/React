import { useState } from 'react';
import Button from './Button'
import Input from './Input'
import './Form.scss'

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
            <Button />
        </form>
    )
}


export default Form;