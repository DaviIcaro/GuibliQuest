import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Filmes from '../components/Filmes';

const Trailers = () => {
    return (
        <div>
            <Navbar/>
            <h1>Trailers</h1>
            <Link to="/home">Fechar</Link>
            <Filmes />
        </div>
    )
}

export default Trailers;