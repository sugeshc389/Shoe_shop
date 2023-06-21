import { useContext, useEffect } from "react";
import "./Registraion.css";
import { useNavigate } from 'react-router-dom';
import { footContext } from "../../Context";
import { useRef } from "react";

export default function Registration() {
  const data = useContext(footContext);
  const nav = useNavigate();
  const inputref = useRef(null)
  const { password, setPassword } = data;
  useEffect(() => {
    console.warn(password);
  }, [password])
  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = inputref.current.email.value
    const Password = inputref.current.password.value
    setPassword([{ Password, Email }]);

    nav('/login')
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form ref={inputref} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="inpt"
            name="email"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="inpt"
            name="password"
            type="password"
            id="password"
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className="toggle-link">
          <span>Already have an account?</span>
          <button className="reg-btn" type="button" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
