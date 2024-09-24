import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import '../styles/Navbar.css';
import searchIcon from '../assets/search-icon.svg';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { movies, setSelectedMovie } = useContext(MovieContext);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const filteredMovie = movies.find(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()));
        if (filteredMovie){
            setSelectedMovie(filteredMovie);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        } else {
            Swal.fire({
                title: "Filme não disponível",
                text: "'" + searchText + "'" + ' não foi encontrado',
                icon: "error",
                background: 'rgb(35, 35, 35)',
                color: 'rgb(255, 255, 255)'
            });    
        }
        
    };

    const handleLogoClick = () => {
        navigate('/home')
        window.location.reload();
    };

    return (
        <div className="navbar">
            <div className="navbar-title" onClick={handleLogoClick}>GhibliQuest</div>
            <div className="navbar-search">
                <input type="text" placeholder="Pesquisar" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} />
                <button className='submit' type='submit' onClick={handleSearch}>
                    <img className='search-icon' src={searchIcon} alt="ícone de pesquisa"/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
