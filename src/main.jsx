import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { Rotas } from './routes/RouterConfig.jsx'
import { MovieProvider } from './context/MovieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={Rotas}/>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);