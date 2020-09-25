import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const StyledBurger = styled.div`
  color: white;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#0D3838' : 'orange'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
  }
  #navbar {
    background-color: #fff !important;
    transition: background-color 200ms linear;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
      <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
      </StyledBurger>
    <center>
      <Toggle id="Navbar" open={open} menu={["HOME","ABOUT","WORKS","SKILLS","INSPIRATION"]}/>
    </center>
    </>
  )
}
export default Burger