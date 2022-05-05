import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Btn from '../components/Btn';
import { initUserData, setNameInDB, setShowNameInDB } from '../store/profile/action';
import { selectShowName, selectUserName } from '../store/profile/selectors';


const Profile = () => {
    const showName = useSelector(selectShowName, shallowEqual);
    const name = useSelector(selectUserName, shallowEqual);

    const [value, setValue] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        initUserData();
    }, []);

    const setShowName = (e) => {
        setShowNameInDB(e.target.checked);
    };

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (value !== '') {
            setNameInDB(value);
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