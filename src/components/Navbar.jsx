import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css'; // Optional styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Portfolio</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
