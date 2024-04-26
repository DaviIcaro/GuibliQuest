import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Filmes from '../components/Filmes';

const Personagens = () => {
    return (
        <div>
            <Navbar/>
            <h1>Personagens</h1>
            <Link to="/home">Voltar</Link>
            <Filmes />
        </div>
    )
}

export default Personagens;