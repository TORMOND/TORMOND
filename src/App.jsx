import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Checkout from './checkout';
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Landing from './Landing'
import PaymentPage from './Payment';
import ThemeContextProvider from './Context/ThemeContext';

function App() {

  return (
    <div className="App">
        <ThemeContextProvider>
          <NavBar />
    <Router> 
  <Routes>
    <Route path='/' element={<Landing />}></Route> 
    <Route path='/payment' element={<PaymentPage />}></Route> 
    {/* <Route path='/create-checkout-session' element={<Checkout />}></Route>  */}

      </Routes>
    </Router>
    <Footer /> 
    </ThemeContextProvider>
    </div>
  )
}

export default App
