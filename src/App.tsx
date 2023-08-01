import { Routes, Route } from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Mathematics from '@/scenes/mathematics';
import Art from '@/scenes/art';
import Contact from '@/scenes/contact';

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

export default App;

//test