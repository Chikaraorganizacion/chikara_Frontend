import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Inscription from './pages/inscription'

function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inscripcion' element={<Inscription />} />
      </Routes>
    </div>
  )
}

export default App
