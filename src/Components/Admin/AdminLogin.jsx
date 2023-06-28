import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
    const inputref = useRef(null)
    const nav = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const admin = inputref.current.admin.value
        const password = inputref.current.password.value
        admin === 'admin'&&password === '123' ? nav('/admin') : alert('This is not an Admin !!! ');

    }
    return (
        <div className="auth-form">
            <h2>Register</h2>
            <form ref={inputref} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="password">Admin:</label>
                    <input
                        className="inpt"
                        name="admin"
                        type="text"
                        id="admin"
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

                <div className="toggle-link">
                    <button className="reg-btn" type="button" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}