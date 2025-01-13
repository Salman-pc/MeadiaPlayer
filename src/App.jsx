import React from 'react'
import Landing from './components/Landing'
import History from './components/History'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './headandfooter/Header'
import Footer from './headandfooter/Footer'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <div className='d-flex flex-column min-vh-100 position-relative'>
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/history' element={<History />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  )
}

export default App
