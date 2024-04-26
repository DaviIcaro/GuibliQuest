import React, { useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import '../styles/Filmes.css';
import { MovieContext } from '../context/MovieContext';

const Filmes = () => {
  const API_KEY = "fca20a8a62aeb9dec3aca16c54e9a58f";
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const DISCOVER_API = `${MOVIE_API}discover/movie?api_key=${API_KEY}&language=pt-BR&with_companies=10342&sort_by=release_date.desc`;

  const { movies, setMovies, selectedMovie, setSelectedMovie, isInitialized, setInitialized } = useContext(MovieContext);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(DISCOVER_API);
      const sortedMovies = response.data.results.slice(0, 8);
      setMovies(sortedMovies);
      if (!isInitialized) {
        setSelectedMovie(sortedMovies[0]); // Seleciona o primeiro filme somente se não inicializado
        setInitialized(true);
      }
    } catch (error) {
      console.error('Erro ao buscar filmes', error);
    }
  }, [DISCOVER_API, setMovies, setSelectedMovie, isInitialized, setInitialized]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="filmes">
      <h1 className='title'>Filmes mais recentes</h1>
      <div className="movie-grid">
        {movies.map((movieItem) => (
          <div key={movieItem.id} className="movie-card" onClick={() => setSelectedMovie(movieItem)}>
            <img src={`https://image.tmdb.org/t/p/w200${movieItem.poster_path}`} alt={movieItem.title} />
            <h2>{movieItem.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filmes;
