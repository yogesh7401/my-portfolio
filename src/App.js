import React from 'react';
import Background from './components/Background'
import './App.css'
import Navigation from './components/Navbar/Navbar'

import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Inspiration from './components/Inspiration'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
  <div>
    <Background id="HOME">
      <Navigation />
      <Home/>
    </Background>
    <About/>
    <Works/>
    <Skills/>
    <Inspiration/>
    <Footer/>
  </div>
  );
}

export default App;
