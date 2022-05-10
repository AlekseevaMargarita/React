import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import Btn from './Btn';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';

const Signin = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/profile';

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
            await auth.signin({ email, password }, () => {
                setTimeout(navigate(from, { replace: true }), 0);
            });
            /*             setEmail('');
                        setPassword(''); */
            /*             toast.success('Авторизация прошла успешно!', {
                            position: toast.POSITION.TOP_RIGHT
                        }); */
        } catch (error) {
            setError(error);
            console.error(error);
            toast.error('Ошибка авторизации', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    return (
        <div>
            <h1>Вход</h1>
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
                <Btn buttonLabel='Войти'></Btn>
            </form>
            <br />
            <Link to={"/signup"}>Зарегистрироваться</Link>
        </div>
    )
};

export default Signin;