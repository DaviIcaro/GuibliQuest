// components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">GuibliQuest</div>
            <div className="navbar-search">
                <input type="text" placeholder="Pesquisar"/>
            </div>
        </div>
    );
};

export default Navbar;
