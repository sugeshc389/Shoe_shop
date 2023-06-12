import { useState } from 'react';
// import './Registration.css';
import PropTypes from 'prop-types';

export default function Registration(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic
    }

    return (
        <div className='auth-form-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} placeholder='Full Name' id='name' name='name' /><br/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' /><br />
                <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' id='password' name='password' /><br />
                <button type="submit">Log In</button>
            </form>
            <a onClick={() => props.onFormSwitch('login')}>Already have an account? Login Here.</a>
        </div>
    );
}

Registration.propTypes = {
    onFormSwitch: PropTypes.func.isRequired,
};
