import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Favoriet from './pages/Favoriet/Favoriet'
import OrderNow from './pages/OrderNow/OrderNow'
import Register from './pages/Register/Register'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
             <Route path='/' element={<Products/>}/>
             <Route path='cart' element={<Cart/>}/>
             <Route path='favoriet' element={<Favoriet/>}/>
             <Route path='/order' element={<OrderNow/>}/>
             <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default App
