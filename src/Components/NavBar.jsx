
import './NavBar.css';
import { GiShoppingBag } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
// import logo from '../assets/Foot_Island.png'






export default function NavBar() {

    return (
        <div>
            <nav className="navbar">
                <h2 className='brand-name'>Foot  Island</h2>
                {/* <img className='logo' src={logo} alt='Logo'/> */}
                <a href="" className="nav-link">MEN</a>
                <a href="" className="nav-link">WOMEN</a>
                <a href="" className="nav-link">COLLECTION</a>
                <a href="" className="nav-link">LOOKBOOK</a> 
                <a href="" className='nav-link'>SALE</a>

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
