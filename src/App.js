import React, { useEffect, useState } from 'react';
import Background from './components/Background'
import './App.css'
import Navigation from './components/Navbar/Navbar'
import LoadingScreen from './components/LoadingScreen'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Inspiration from './components/Inspiration'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)    
  }, [])

  return (
  <>
    {loading === false ?(
    <>
    <Background id="HOME">
      <Navigation />
      <Home/>
    </Background>
    <About/>
    <Works />
    <Skills/>
    <Inspiration/>
    <Footer/>
    </>
    ) : (
      <LoadingScreen />
    )}
    
  </>
  );
}

export default App;
