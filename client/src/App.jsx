import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Detail from './views/Detail'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import Cart from './views/Cart'
import Profile from './views/Profile'
import Checkout from './views/Checkout'
import NotFound from './views/NotFound'
import NavBar from './components/NavBar'
import { UserContext } from './context/UserContext'
import { useContext } from 'react'


function App() {
  const {token} = useContext(UserContext)
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/login' element={token ? <Navigate to={"/profile"}/> : <LoginView/>}/>
        <Route path='/register' element={token ? <Profile/> : <RegisterView/>}/>
        <Route path='/cart' element={token ? <Cart/> : <Navigate to={"/login"}/>}/>
        <Route path='/profile' element={token ? <Profile/> :  <Navigate to={"/login"}/>}/>
        <Route path='/checkout' element={token ? <Checkout/> : <Navigate to={"/login"}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}
export default App
