import './App.css'
import { Link, Outlet } from "react-router-dom";
import TelaInicial from './pages/TelaInicial';

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default App