import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/auth/authThunks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(login(email, password));
            setMessage('Login berhasil!');
            navigate('/dashboard');
            setIsError(false);
        } catch (error: any) {
            setMessage(error.message || 'Login gagal.');
            setIsError(true);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {message && <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
