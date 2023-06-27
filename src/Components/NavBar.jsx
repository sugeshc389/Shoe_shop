
import './NavBar.css';
import { GiShoppingBag } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { footContext } from '../Context'
import { useContext } from 'react'
import { Badge } from 'react-bootstrap';


export default function NavBar() {
    
    const user = useContext(footContext);
    const {cartItems}= user

  

    return (
        <div>



                <nav className="navbar">
                    <Link style={{ textDecoration: 'none' }} to='/'><h2 className='brand-name' >Foot  Island</h2></Link>
                    <Link to='/men' className="nav-link">MEN</Link>
                    <Link to='/women' className="nav-link">WOMEN</Link>
                    <Link to='/collection' className="nav-link">COLLECTION</Link>
                    <Link to='/lookbook' className="nav-link">LOOKBOOK</Link>
                    <Link to='/sale' className="nav-link">SALE</Link>

                    <div className='icon'>

                        <a href="" className='nav-link'></a>
                        <a href="" className='nav-link'>CONTACT</a>
                        <Link to='/cart' className='nav-link'><GiShoppingBag /><Badge className="bg" >{cartItems.length}</Badge></Link>
                        <Link to='/register' className='nav-link'><FaUserAlt /></Link>
                    </div>
                </nav>
                

                

            

        </div>
    );
}
