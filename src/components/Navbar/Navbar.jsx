import React,{useState} from 'react';
import{GiHamburgerMenu} from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import {Link} from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const[toggelMenu ,setToggleMenu] = useState(false);
return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="Logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><Link to="/">Home</Link></li>
      <li className='p__opensans'><Link to="/About">About</Link></li>
      <li className='p__opensans'><Link to="/Menu">Menu</Link></li>
      <li className='p__opensans'><Link to="/Chef">Chefs</Link></li>
      <li className='p__opensans'><Link to="/Award">Award</Link></li>
      <li className='p__opensans'><Link to="/Contact">Contact</Link></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log In /Register</a>
      <div></div>
      <a href="#/" className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
    
   {toggelMenu &&(
      <div className='app__navbar-smallscren_overlay flex__center slide-bottom'>
        <MdRestaurantMenu  fontSize={27} className='overlay__close' onClick={()=> setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensans'><Link to="/">Home</Link></li>
      <li className='p__opensans'><Link to="/About">About</Link></li>
      <li className='p__opensans'><Link to="/Menu">Menu</Link></li>
      <li className='p__opensans'><Link to="/Chef">Chefs</Link></li>
      <li className='p__opensans'><Link to="/Award">Award</Link></li>
      <li className='p__opensans'><Link to="/Contact">Contact</Link></li>
      </ul>
      </div>
      )}   
    
    </div>
  </nav>
)
}
export default Navbar;
