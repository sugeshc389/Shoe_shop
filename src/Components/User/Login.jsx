import { useRef, useContext } from "react";
import "./Registraion.css";
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'
import { footContext } from "../../Context";

const Login = () => {
  const data = useContext(footContext)
  const nav = useNavigate()
  const inputRef = useRef()
  const { password } = data


  const handleSubmit = (e) => {
    e.preventDefault()
    const email = inputRef.current.email.value
    const Password = inputRef.current.password.value
    console.log(email, Password);
    const [newdata] = password
    newdata.Email == email && newdata.Password == Password ? nav('/') : alert('User Not Found !!!');


  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form ref={inputRef}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className='inpt'
            name='email'
            type='email'
            id='email'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className='inpt'
            name='password'
            type='password'
            id='password'
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit} >Login</button>

        <div className="toggle-link">
          <span>
            Dont have an account?

          </span>

        </div>
      </form>
      <Link to='/register' ><button
        className="reg-btn"
        type="submit"

      >
        Register
      </button></Link>
    </div>
  );
};

export default Login;
