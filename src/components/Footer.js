import styled from 'styled-components'
import React from 'react'

const StyledFooter = styled.div`
    background: black;
    color:grey;
    height: 50px;
    padding-top: 30px;
    font-family: "open san";
    font-size: 12px;
p{
    width:240px;
    margin-left: auto;
    margin-right: auto;
}
    `

function Footer(){
 return(
     <StyledFooter>
         <p>© 2020 Yogeshwaran C | All rights reserved</p>
     </StyledFooter>
 )
}

export default Footer