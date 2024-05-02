import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/FilmeSelecionado.css';
import { MovieContext } from '../context/MovieContext';
import youtubeLogo from '../assets/youtube-logo.png'

const FilmeSelecionado = () => {
  const { selectedMovie } = useContext(MovieContext);
  const [director, setDirector] = useState(null);

  useEffect(() => {
    if (selectedMovie) {
      fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/credits?api_key=fca20a8a62aeb9dec3aca16c54e9a58f`)
        .then(response => response.json())
        .then(jsonData => {
          const directorData = jsonData.crew.find(({ job }) => job === 'Director');
          setDirector(directorData);
        });
    }
  }, [selectedMovie]);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
  }

  return (
    <div className="FilmeSelecionado">
      {selectedMovie && (
        <div className="selected-movie-display" style={{ backgroundImage: `linear-gradient(to top, rgba(35, 35, 35, 1), rgba(0, 0, 0, 0) 20%), url(https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img className='poster' src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
          <div className="movie-details">
            <h2>{selectedMovie.title}</h2>
            <p>{director ? director.name : 'Carregando nome do diretor'} • {selectedMovie.release_date} • {selectedMovie.vote_average.toFixed(1)}</p>
            <p>{selectedMovie.overview}</p>
            <div className='links' onClick={() => handleOnClick()}>
              <div className='link-personagens'><Link to="/personagens">Ver elenco</Link></div>
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
