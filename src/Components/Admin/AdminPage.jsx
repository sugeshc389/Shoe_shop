import { useContext } from "react"
import { footContext } from "../../Context"
import './AdminPage.css'
import { useNavigate } from "react-router-dom"

export default function AdminPage() {
    const nav = useNavigate();
    const data = useContext(footContext)
    // const {password} = userContext;
    // const [user] = password;
    console.log(data);
    return (
        <div>

            <nav className="navbar">
                <h2 className="admin-panel">Admin Panel</h2>
                <button>Users</button>
                <button onClick={()=>nav('/products')}>Products</button>
            </nav>






        </div>
    )
}