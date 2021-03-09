import styled from 'styled-components'
import React from 'react'
import './Card.css'


const StyledCard = styled.div` 
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    width:220px;
    margin: 10px 10px 10px 10px;
    background: white;

    @media (max-width:1310px){
        width:220px;
    }
    @media (max-width:1200px){
        width:200px;
    }
    @media (max-width:1100px){
        width:180px;
    }
    @media (max-width:1000px){
        width:220px;
    }
    @media (max-width:900px){
        width:200px;
    }
    @media (max-width:800px){
        width:190px;
    }
    @media (max-width:500px){
        width:100%;
    }
    @media (max-width:600px){
        width:100%;
    }
    a{
        text-decoration: none;
    }
    p{
        color: black;
        font-size:13px;
        margin-left: 12px;
        margin-right: 12px;
        text-align: justify;
    }
` 
function Card({ image, imageId, url ,title , discription}){
    return(
        <StyledCard id="hover">
            <a  href={ url }>
            <img src={ image }  alt={ imageId } id="card" height='130' style={{marginLeft:"10px",marginTop:"10px"}} />
            <p style={{marginTop:"10px"}}><b>{ title } </b></p>
            <p>{ discription }</p>
            
            </a>
        </StyledCard>
    );
}

export default Card;