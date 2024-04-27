import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import '../styles/FilmeSelecionado.css';
import YouTube from 'react-youtube';
import { MovieContext } from '../context/MovieContext';
import youtubeLogo from '../assets/youtube-logo.png'

const FilmeSelecionado = () => {
  const { selectedMovie } = useContext(MovieContext);

  return (
    <div className="FilmeSelecionado">
      {selectedMovie && (
        <div className="selected-movie-display" style={{ backgroundImage: `linear-gradient(to top, rgba(35, 35, 35, 1), rgba(0, 0, 0, 0) 20%), url(https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img className='poster' src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
          <div className="movie-details">
            <h2>{selectedMovie.title}</h2>
            <p>Fulano • {selectedMovie.release_date}</p>
            <p>{selectedMovie.overview}</p>
            <div className='links'>
              <div className='link-personagens'><Link to="/personagens">Ver personagens</Link></div>
              <div className='link-trailers'>
                <Link to="/trailers">Assistir trailer<img src={youtubeLogo} alt="youtube logo"/></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmeSelecionado;
