import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Filmes from '../components/Filmes';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Link to="/personagens">Personagens</Link>
            <Link to="/trailers">Trailers</Link>
            <Filmes showDetails={true} />
        </div>
    );
};

export default Home;
