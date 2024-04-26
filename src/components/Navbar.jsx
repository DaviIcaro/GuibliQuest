// components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import searchIcon from '../assets/search-icon.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">GhibliQuest</div>
            <div className="navbar-search">
                <input type="text" placeholder="Pesquisar"/>
                <img className='search-icon' src={searchIcon} alt="icone de pesquisa"/>
            </div>
        </div>
    );
};

export default Navbar;
