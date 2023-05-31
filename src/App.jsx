import ReactDOM from 'react-dom/client'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Inscription from './pages/inscription'

function App () {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inscripcion-completa' element={<Inscription />} />
        <Route path='*' element={<h1>Not Found - 404 Error</h1>} />
      </Routes>
    </div>
  )
}

export default App

/*
Uso de React Route para enrutamiento de páginas
Se crea una SPA (Single Page Application) para evitar qeu se recargen las páginas neuvamente al redireccionar.
Lo anterior se usa mediante el componente "Link" de react-route-dom
*/