import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Checkout from './checkout';
import Footer from './components/Footer'
import Landing from './Landing'
import PaymentPage from './Payment';


function App() {

  return (
    <div className="App">
    <Router> 
  <Routes>
    <Route path='/' element={<Landing />}></Route> 
    <Route path='/payment' element={<PaymentPage />}></Route> 
    {/* <Route path='/create-checkout-session' element={<Checkout />}></Route>  */}
      </Routes>
    </Router>
    <Footer /> 
    </div>
  )
}

export default App
