import { Routes, Route } from 'react-router-dom'
import Navbar from './scenes/navbar'
import Home from './scenes/Home'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
