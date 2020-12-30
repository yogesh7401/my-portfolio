import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const StyledAbout = styled.div`
    background-color: #4c4c4c;
    color: white;
    padding: 150px 20% 160px 20%;
    p{
        text-indent: "15%"
    }
    @media (max-width : 700px){
        padding :70px 10% 70px 10%;
    }
`
function About(){
    return(
        <>
        <StyledAbout >
            <h2 id="ABOUT" style={{color:"black",fontFamily: "'open san',  sans-serif"}}>About Me</h2><br></br>
            <p style={{textIndent:"20%",letterSpacing: "0.1em",textAlign:"justify"}}> My self Yogeshwaran , I hail from Chennai. I did my Intermediate from State Board with 85% and 
                    High school from State Board with 90%. Now I'm studing in DMI engineering college. I like Mathematics, Because In my schooling days, I have scored High marks in that subject compared to 
                    chemistry, physics. My Hobby is playing Cricket. My Strength is takes Initiative to work independently, Adaptable to any kind of situation 
                    in estranged group and Helping tendency. My Weakness is I am not comfortable, until I finish my work in the given time and over friendly in 
                    nature.</p>
            <Social/>
        </StyledAbout>
        </>
    )
}

export default About;