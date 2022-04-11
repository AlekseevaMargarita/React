import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Btn from '../components/Btn';
import { setName, toggleName } from '../store/profile/action';

const Profile = () => {
    const { showName, name } = useSelector((state) => state);

    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleName);
    }, [dispatch]);

    const [value, setValue] = useState('');

    const inputRef = useRef(null);

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (value !== '') {
            dispatch(setName(value));
            setValue('');
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        inputRef.current?.focus;
    }, []);

    return (
        <>
            <h1>Profile</h1>
            <div className="name-wrap">
                {showName && <h2>{name}</h2>}
            </div>
            <label>
                <input
                    type="checkbox"
                    checked={showName}
                    value={showName}
                    onChange={setShowName}
                />
                {showName ? "Скрыть имя" : "Показать имя"}
            </label>
            <br />
            <form
                className="Form"
                onSubmit={handleClick}>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Введите имя"
                        variant="outlined"
                        value={value}
                        onChange={handleInput}
                        inputRef={inputRef}
                        autoFocus
                    />
                    <Btn buttonLabel="Отправить" />
                </div>
            </form>
        </>
    );
};

export default Profile;