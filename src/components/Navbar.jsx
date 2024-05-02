import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import '../styles/Navbar.css';
import searchIcon from '../assets/search-icon.svg';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { movies, setSelectedMovie } = useContext(MovieContext);
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        const filteredMovie = movies.find(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()));
        if (filteredMovie){
            setSelectedMovie(filteredMovie);
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

    // const handleLogoClick = () => {
    //     window.location.reload();
    //   };

    return (
        <div className="navbar">
            <div className="navbar-title">GhibliQuest</div>
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
