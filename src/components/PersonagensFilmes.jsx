import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PersonagensFilmes.css';
import { MovieContext } from '../context/MovieContext';

const PersonagensFilmes = () => {
    const { selectedMovie } = useContext(MovieContext);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (selectedMovie) {
            const fetchCharacters = async () => {
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/credits?api_key=fca20a8a62aeb9dec3aca16c54e9a58f`);
                    const charactersData = response.data.cast.map((actor) => ({
                        id: actor.cast_id,
                        name: actor.character,
                        actor: actor.name,
                        profile_path: actor.profile_path
                    }));
                    setCharacters(charactersData.slice(0, 10)); // Limitando a exibição para 10 personagens
                } catch (error) {
                    console.error('Erro ao buscar personagens', error);
                }
            };
            fetchCharacters();
        }
    }, [selectedMovie]);

    return (
        <div className="personagem-filme-container" style={{ backgroundImage: `url(${selectedMovie ? `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}` : ''})` }}>
            {/* <h2>Dubladores - Elenco de {selectedMovie ? selectedMovie.title : ''}</h2> */}
            <div className="character-grid">
                {characters.map((character) => (
                    <div key={character.id} className="character-card">
                        <img src={`https://image.tmdb.org/t/p/w200${character.profile_path}`} alt={character.name} />
                        <div>
                            <h3>{character.name}</h3>
                            <p>Interpretado por: {character.actor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonagensFilmes;
