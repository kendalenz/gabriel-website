import { Routes, Route } from 'react-router-dom'
import Navbar from './scenes/navbar'
// import Home from './scenes/navbar/home';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <h1>test</h1>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App
