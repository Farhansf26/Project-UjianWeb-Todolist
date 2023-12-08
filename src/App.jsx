import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import DetailPage from './pages/Detail-Page'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='font-Poppins bg-black text-white min-h-screen w-full py-6 px-12'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
