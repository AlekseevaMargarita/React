import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import Btn from './Btn';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePassWordChange = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setTimeout(() => navigate('/signin', { replace: true }), 2000);
            setEmail('');
            setPassword('');
            toast.success('Вы зарегистрированы и будете перенаправлены на страницу авторизации', {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            setError(error);
            console.log(error.message);
            toast.error('Ошибка регистрации', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <ToastContainer />
            <form onSubmit={onSubmit}>
                <TextField
                    type="email"
                    placeholder="Введите email"
                    name="email"
                    onChange={handleEmailChange}
                    value={email}
                    required
                />
                <TextField
                    type="password"
                    placeholder="Введите пароль"
                    name="password"
                    onChange={handlePassWordChange}
                    value={password}
                    required
                />
                {error && <p>{error.message}</p>}
                <Btn buttonLabel='Зарегистрироваться'></Btn>
            </form>
            <br />
            <Link to={"/signin"}>Войти</Link>
        </div>
    )
};

export default Signup;