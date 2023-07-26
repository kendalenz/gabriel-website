import { Routes, Route } from 'react-router-dom'
import Navbar from '././scenes/navbar/index'
import Home from '././scenes/home/index'
import Mathematics from './scenes/mathematics'
import Art from '././scenes/art/index'
import Contact from '././scenes/contact/index'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mathematics' element={<Mathematics />} />
        <Route path='/art' element={<Art />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
