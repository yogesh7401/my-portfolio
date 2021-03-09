import React from 'react'
import styled from 'styled-components'
import Social from './Social.js'
import downArrow from './Image/down.svg'
import { Link } from "react-scroll";


const StyledHome = styled.div`
    color: white;
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3{
      font-family: Arial, sans-serif;
      margin-bottom: 1.5px;

    }
    div{
      width: 400px;
      margin-left: auto;
      margin-rigth: auto;
    }
    p{
      margin-bottom: 1.5px;
      font-size: 18px;
      font-weight: 2px;
    }

    @media (max-width: 600px){
      left: 50%;
      div{
        width:280px;
        padding-left: 10px;
        padding-rigth: 10px;
      }
      h5{
        font-size: 40px
      }
      p{
        font-size: 17px;
      }
    }
`

const Down = styled.div`
    text-align: center;
    position:absolute;
    bottom:0;
    height:40px;
`
const Home = () => {
    return (
      <>
      
      
      <StyledHome >
        <div>
          <p>Hi There I am</p>
          <h3>Yogeshwaran.</h3>
          <p style={{textAlign:"center"}}>A full-stack developer in india, 
            I'm interested in all parts of application  
            developement and this is my portfolio 
          </p>
        </div>
        <Social/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Down >
          <Link to="About" smooth={true} duration={800}>
            <img src={ downArrow } className="quote" alt="down" height="30px"></img>
          </Link>
        </Down>
      </StyledHome>
      </>

    )
  }

export default Home ;