import React from 'react';
import Burger from './Menubar';
import { BrowserRouter } from 'react-router-dom'



const Navigation = () => {
  return (
    <BrowserRouter>
      <Burger/>
    </BrowserRouter>
  )
}

export default Navigation