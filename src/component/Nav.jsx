import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand a" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="navbar-brand a" activeClassName="active">About</NavLink>
            <NavLink to="/contact" className="navbar-brand a" activeClassName="active">Contact</NavLink>
            <NavLink to="/work" className="navbar-brand a" activeClassName="active">Work</NavLink>
            <NavLink to="/services" className="navbar-brand a" activeClassName="active">Services</NavLink>
            <NavLink to="/register" className="navbar-brand a" activeClassName="active">Registration</NavLink>
        </nav>
    );
};

export default Nav;
