import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Btn from '../components/Btn';
import { selectShowName, selectUserName } from '../store/profile/selectors';
import { Button } from '@mui/material';
import useAuth from '../hooks/AuthProvider';
import { initUserData, setNameInDB, setShowNameInDB } from '../middlewares/middleware';
import { setName, toggleName } from '../store/profile/action';

const Profile = () => {
    const showName = useSelector(selectShowName, shallowEqual);
    const name = useSelector(selectUserName, shallowEqual);
    const auth = useAuth();
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        dispatch(initUserData());
    }, []);

    const setShowName = (e) => {
        dispatch(setShowNameInDB(e.target.checked));
    };

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (value !== '') {
            dispatch(setNameInDB(value));
            setValue('');
            inputRef.current?.focus();
        }
    };

    const logOut = (e) => {
        e.preventDefault();
        auth.signout(() => {
            dispatch(setName('NoName'));
            dispatch(toggleName(false));
        });
    }

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
            <br />
            <div>
                <Button type="submit" onClick={logOut}>Выход</Button>
            </div>
        </>
    );
};

export default Profile;