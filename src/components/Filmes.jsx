import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/Filmes.css'; // Importando o CSS para o componente
import YouTube from 'react-youtube';

const Filmes = () => {
  const API_KEY = "fca20a8a62aeb9dec3aca16c54e9a58f";
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const DISCOVER_API = `${MOVIE_API}discover/movie?api_key=${API_KEY}&language=pt-BR&with_companies=10342&sort_by=release_date.desc`;

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(DISCOVER_API);
      const sortedMovies = response.data.results.slice(0, 8); // Limitar a 8 filmes
      setMovies(sortedMovies);
      setMovie(sortedMovies[0]); // Selecionar o filme mais recente
      setTrailerKey(sortedMovies[0].videos?.results[0]?.key); // Ajustar chave do trailer para o filme mais recente
    } catch (error) {
      console.error('Erro ao buscar filmes', error);
    }
  }, [DISCOVER_API]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleMovieSelect = movie => {
    setMovie(movie);
    setTrailerKey(movie.videos?.results[0]?.key); // Ajustar chave do trailer
    setShowVideoPlayer(false);
  };

  return (
    <div className="filmes">
      <h1>Filmes Studio Ghibli</h1>
      {movie && (
        <div className="selected-movie-display">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p><strong>Lançamento:</strong> {movie.release_date}</p>
            <button onClick={() => setShowVideoPlayer(true)}>Assistir Trailer</button>
          </div>
        </div>
      )}
      <div className="movie-grid">
        {movies.map((movieItem) => (
          <div key={movieItem.id} className="movie-card" onClick={() => handleMovieSelect(movieItem)}>
            <img src={`https://image.tmdb.org/t/p/w200${movieItem.poster_path}`} alt={movieItem.title} />
            <h2>{movieItem.title}</h2>
          </div>
        ))}
      </div>
      {showVideoPlayer && trailerKey && (
        <YouTube videoId={trailerKey} opts={{ height: '390', width: '640' }} />
      )}
    </div>
  );
};

export default Filmes;
