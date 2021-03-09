import React from 'react'
import styled from 'styled-components'
import Open from './Image/quote-open.png'
import Close from './Image/quote-close.png'
import './quotes.css'
 
const Inspire = styled.div`
    padding: 85px 20% 120px 20%;
    background: #2b2d42;

    @media (max-width: 1000px){
        padding: 50px 10% 100px 10%;
    } 
    @media (max-width: 650px){
        padding: 25px 5% 100px 5%;
    }
`
const Quote = styled.div`
    padding: 0 10% 0 10%;
    color: White;
    font-size: 20px;
    text-align: left;
`
const Saying = styled.div`
    color: Red;
    font-size: 250x;
    text-align: right;
`

function Inspiration(){
    return(
        <Inspire >
            <img src={ Open } alt="a" width="100px" height="100px" className="quote" id="Inspiration"></img>
            <Quote>
                If you fail, never give up because F.A.I.L means "First Attempt In Learning"<br/>
            </Quote>
            <Saying>
                - APJ Abdul Kalam
            </Saying>
            <img src={ Close } alt="b" width="100px" height="100px" className="quote" id="Closed"></img>

            <img src={ Open } alt="c" width="100px" height="100px" className="quote" style={{marginTop:"100px"}}></img>
            <Quote>
                My first bat was shaped of a coconut branch. And from that day, all I wanted to do was be a cricketer
            </Quote>
            <Saying>
                - Brain Lara
            </Saying>
            <img src={ Close } alt="d" width="100px" height="100px" className="quote"id="Closed"></img>
        </Inspire>
    );
}

export default Inspiration;