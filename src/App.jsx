import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register, Login, Home} from './pages'
import Product from './pages/product/product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant/:id' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
