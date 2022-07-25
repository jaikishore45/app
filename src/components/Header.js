import React from 'react'
import '../index.css'
import '../components/header.css'
import {Link} from 'react-router-dom';
import logo from '../assets/Travel-Logo.jpg'

const Header = () => {
    return (
        
<nav>
    <img src={logo}/> 
 <div class="nav-links">
    <ul>
        <li><Link to='/login_signup'>LOGIN</Link></li>
        <li><Link to='/About'>ABOUT</Link></li>
        <li><Link to='/Feedback'>FEEDBACK</Link></li>
        </ul>
 </div>
</nav>   

    )
}


export default Header
