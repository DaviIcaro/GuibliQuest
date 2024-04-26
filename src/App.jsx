import './App.css'
import { Link, Outlet } from "react-router-dom";
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div>
        <Outlet/>
      </div>
    </MovieProvider>
  )
}

export default App