import React from "react";
import Navbar from "../components/Navbar";
import Filmes from '../components/Filmes';
import PersonagensFilmes from '../components/PersonagensFilmes';
import '../styles/PersonagensFilmes.css';

const Personagens = () => {
    return (
        <div>
            <Navbar/>
            <PersonagensFilmes />
            <Filmes />
        </div>
    )
}

export default Personagens;
