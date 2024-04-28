import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Filmes from '../components/Filmes';
import PersonagensFilmes from '../components/PersonagensFilmes';
import '../styles/PersonagensFilmes.css';

const Personagens = () => {
    return (
        <div>
            <Navbar/>
            <Link to="/home" className="back-button">Voltar</Link>
            <PersonagensFilmes />
            <Filmes />
        </div>
    )
}

export default Personagens;
