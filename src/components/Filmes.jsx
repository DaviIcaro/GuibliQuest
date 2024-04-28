import React, { useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import '../styles/Filmes.css';
import { MovieContext } from '../context/MovieContext';

const Filmes = () => {
  const API_KEY = "fca20a8a62aeb9dec3aca16c54e9a58f";
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const DISCOVER_API = `${MOVIE_API}discover/movie?api_key=${API_KEY}&language=pt-BR&with_companies=10342&sort_by=release_date.desc&with_runtime.gte=71`;

  const { movies, setMovies, selectedMovie, setSelectedMovie, isInitialized, setInitialized } = useContext(MovieContext);

  const fetchMovies = useCallback(async () => {
    try {
      let allMovies = [];
      let currentPage = 1;
      let totalPages = null;
  
      do {
        const response = await axios.get(`${DISCOVER_API}&page=${currentPage}`);
        allMovies = allMovies.concat(response.data.results);
        totalPages = response.data.total_pages;
        currentPage++;
      } while (currentPage <= totalPages && currentPage <= 5);
  
      setMovies(allMovies);
      if (!isInitialized) {
        setSelectedMovie(allMovies[0]);
        setInitialized(true);
      }
    } catch (error) {
      console.error('Erro ao buscar filmes', error);
    }
  }, [setMovies, setSelectedMovie, isInitialized, setInitialized]);
  

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });    
  };
  
  return (
    <div className="filmes">
      <h1 className='title'>Filmes</h1>
      <div className="movie-grid">
        {movies.map((movieItem) => (
          <div key={movieItem.id} className="movie-card" onClick={() => handleSelectMovie(movieItem)}>
            <img src={`https://image.tmdb.org/t/p/w200${movieItem.poster_path}`} alt={movieItem.title} />
            <h2>{movieItem.title}</h2>
            <div>{movieItem.vote_average ? <span className={"movie-voting"}>{movieItem.vote_average.toFixed(1)}</span> : null}</div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Filmes;
