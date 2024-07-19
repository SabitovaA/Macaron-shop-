import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Favoriet from './pages/Favoriet/Favoriet'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route path='/' element={<Products/>}/>
         <Route path='cart' element={<Cart/>}/>
         <Route path='favoriet' element={<Favoriet/>}/>
      </Route>
    </Routes>
  )
}

export default App
