// import './Login.css';
import PropTypes from 'prop-types';

import { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <div className="auth-form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' /><br />
                <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' id='password' name='password' /><br />
                <button type="submit">Log In</button>
            </form>
            <a onClick={() => props.onFormSwitch('register')}>Don t have an account? Register Here.</a>
        </div>

    )
} 
Login.propTypes = {
    onFormSwitch: PropTypes.func.isRequired,
};