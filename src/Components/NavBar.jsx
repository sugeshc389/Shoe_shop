
import './NavBar.css';
import { GiShoppingBag } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { footContext } from '../Context'
import { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import Logo from '../assets/Logo.png'


export default function NavBar() {

    const user = useContext(footContext);
    const { cartItems, login, password,setLogin } = user
    const [uName] = password

    const logOut = () =>{
        setLogin(false)

    }
    




    return (
        <div>


            <img style={{ height: '4rem', marginLeft: '8rem' }} src={Logo} alt="Logo" />
            <nav className="navbar">

                <Link style={{ textDecoration: 'none', marginTop: '-2rem' }} to='/'><h2 className='brand-name' >Footland</h2></Link>



                <Link to='/men' className="nav-link">MEN</Link>
                <Link to='/women' className="nav-link">WOMEN</Link>
                <Link to='/collection' className="nav-link">COLLECTION</Link>
                <Link to='/lookbook' className="nav-link">LOOKBOOK</Link>
                <Link to='/sale' className="nav-link">SALE</Link>

                <div className='icon'>

                    <a href="" className='nav-link'></a>
                    <a href="" className='nav-link'>CONTACT</a>
                    {login ? <Link to='/cart' className='nav-link'><GiShoppingBag /><Badge className="bg" >{cartItems.length}</Badge></Link>
                        : <Link to='/register' className='nav-link'><GiShoppingBag /><Badge className="bg" >{cartItems.length}</Badge></Link>}
                    <Link to='/register' className='nav-link'><FaUserAlt /></Link>
                    <Link to='/adminLogin' className='nav-link'>Admin Login</Link><br />

                </div>

            </nav>
       
             {
                login ?

                 <div className='user-name'>
                    <h4>Welcome,{uName.Name}</h4>
                    <button onClick={()=>logOut()}>Log out</button>
                </div>
                :
                null
            }
           
        </div>
    );
}
