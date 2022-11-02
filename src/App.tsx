import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';
import Login from "./paginas/login/Login"

/* Dentro do Routes entram os componentes que serão alterados, as rotas que serão alteradas*/ 

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
