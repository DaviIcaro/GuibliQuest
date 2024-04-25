import './App.css'
import Navbar from './components/Navbar'
import Filmes from './components/Filmes'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Link to="/">Página Inicial</Link>
      <Link to="/home">Home</Link>
      <Link to="/personagens">Personagens</Link>
      <Link to="/trailers">Trailers</Link>
      <Outlet/>
      <Filmes></Filmes>
    </div>
  )
}

export default App