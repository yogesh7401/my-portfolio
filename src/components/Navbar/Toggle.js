import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 100;
  background: #2a9d8f;
  @media (max-width: 600px) {
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    transition: '1s ease'; 
  }
`
const Ul = styled.ul`
  cursor: pointer;
  list-style: none;
  display: flex;
  width: 531px;
  text-align: left;
  backgroud-color: black;
  z-index: 100;
  flex-flow: row nowrap;
  li {
    padding: 12px 20px;
  }

  
  @media (max-width: 600px) {
    z-index: 100;
    width: 150px;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(110%)'};
    top: 100px;
    right: 10px;
    height: auto;
    transition: '0.25s ease'
    li {
      color: #fff;
    }
  } 
`;
 const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
  text-decoration: none;
  color: #e76f51
  }
  
 `;




function Toggle({ open , menu }){
 

  return (<>
  <Nav className="shadow-lg">
        <Ul open={open} style={{margin:"auto"}}>
          <li>
            <StyledLink activeClass="active" 
                          to= { menu[0] }
                          smooth={true}
                          duration={800}>
                            { menu[0] }
            </StyledLink>
          </li>
          <li>
            <StyledLink activeClass="active"
                          to={ menu[1] }
                          smooth={true}
                          duration={800}>
                            { menu[1] }
            </StyledLink>
          </li>
          <li>
            <StyledLink activeClass="active"
                          to={menu[2]}
                          smooth={true}
                          duration={800}
                          offset={-50}>
                            { menu[2] }
            </StyledLink>
          </li>
          <li><StyledLink activeClass="active"
                          to={ menu[3] }
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                            { menu[3] }
            </StyledLink>
          </li>
          <li>
            <StyledLink activeClass="active"
                          to={ menu[4] }
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                            { menu[4] }
            </StyledLink>
          </li><br/>
        </Ul> 
      </Nav>
    </>
    
  )
}


export default Toggle