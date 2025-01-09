import React from 'react'
import Landing from './components/Landing'
import History from './components/History'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Header from './headandfooter/Header'
import Footer from './headandfooter/Footer'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer
      position="top-right"
      theme="colored"
      />
      <div className='position-relative '>
        <Header/>
          <Routes>
              <Route path='/' element={<Landing/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/history' element={<History/>}/>   
          </Routes>
          <div className=''><Footer/></div>
      </div>
    </>
  )
}

export default App
