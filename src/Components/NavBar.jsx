
import './NavBar.css';
import { GiShoppingBag } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function NavBar() {

    return (
        <div>
            <nav className="navbar">
               <Link style={{textDecoration:'none'}} to='/'><h2 className='brand-name' >Foot  Island</h2></Link> 
                <Link to='/men' className="nav-link">MEN</Link>
                <Link to='/women' className="nav-link">WOMEN</Link>
                <Link to='/collection' className="nav-link">COLLECTION</Link>
                <Link to='/lookbook' className="nav-link">LOOKBOOK</Link>
                <Link to='/sale' className="nav-link">SALE</Link>

                <div className='icon'>
                    <a href="" className='nav-link'>OUR STORY</a>
                    <a href="" className='nav-link'>CONTACT</a>
                    <a href="" className='nav-link'><GiShoppingBag /></a>
                    <a href="" className='nav-link'><FaUserAlt /></a>
                </div>
            </nav>

        </div>
    );
}
