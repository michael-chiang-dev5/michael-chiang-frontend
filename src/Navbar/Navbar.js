import React from "react"
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>michael chiang</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;