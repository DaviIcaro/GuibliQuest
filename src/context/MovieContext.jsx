import React, { createContext, useState } from 'react';

export const MovieContext = createContext({
  movies: [],
  selectedMovie: null,
  setMovies: () => {},
  setSelectedMovie: () => {},
  isInitialized: false,
  setInitialized: () => {}
});

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isInitialized, setInitialized] = useState(false); // Estado para rastrear a inicialização

    const value = {
        movies,
        setMovies,
        selectedMovie,
        setSelectedMovie,
        isInitialized,
        setInitialized
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
