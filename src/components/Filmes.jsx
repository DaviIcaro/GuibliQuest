import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/Filmes.css';
import YouTube from 'react-youtube';
import MovieDetails from './MovieDetails'; // Mantenha a importação para usar no Home

const Filmes = ({ showDetails }) => {
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
      const sortedMovies = response.data.results.slice(0, 8);
      setMovies(sortedMovies);
      setMovie(sortedMovies[0]);
      setTrailerKey(sortedMovies[0].videos?.results[0]?.key);
    } catch (error) {
      console.error('Erro ao buscar filmes', error);
    }
  }, [DISCOVER_API]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleMovieSelect = movie => {
    setMovie(movie);
    setTrailerKey(movie.videos?.results[0]?.key);
    setShowVideoPlayer(false);
  };

  const handlePlayTrailer = () => setShowVideoPlayer(true);

  return (
    <div className="filmes">
      <h1>Filmes Studio Ghibli</h1>
      {showDetails && movie && <MovieDetails movie={movie} onPlayTrailer={handlePlayTrailer} />}
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
