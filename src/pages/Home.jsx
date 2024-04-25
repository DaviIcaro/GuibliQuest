import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Filmes from '../components/Filmes'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Link to="/personagens">Personagens</Link>
            <Link to="/trailers">Trailers</Link>
            <Filmes></Filmes>
        </div>
    );
};

export default Home;