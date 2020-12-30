import React from 'react'
import styled from 'styled-components'
import Social from './Social.js'
const StyledHome = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2{
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      color: white;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: black;
    }
    div{
      width: 400px;
      margin-left: auto;
      margin-rigth: auto;
    }
    p{
      color: white;
      font-size: 20px;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: black;
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

const Home = () => {
    return (
      <>
      
      
      <StyledHome >
        <div>
          <p>Hi There I am</p>
          <h2> Yogeshwaran.</h2>
          <p style={{textAlign:"center"}}>A full-stack developer in india ; 
            I'm interested in all parts of application  
            developement and this is my portfolio 
          </p>
        </div>
        <Social/>
        <br></br><br></br>
      </StyledHome>
      </>

    )
  }

export default Home ;