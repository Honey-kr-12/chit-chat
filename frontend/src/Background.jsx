import React from 'react'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import './background.css';
import { useAuthContext } from './context/AuthContext.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
// import videobg from '../public/gojovsjogo.mp4'


const Background = () => {
    const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center backgroundV'>
      {/* <video autoPlay loop src={videobg}>
      </video> */}
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default Background
