import React from 'react';
import { NavLink ,Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul className=' flex gap-7 px-7 py-2 font-bold'>
                <li><Link to="/">Hot deals</Link></li>
                <li><Link to="/about">Shop</Link></li>
                <li><Link to="/projects">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/page">page</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar