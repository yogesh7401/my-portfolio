import React from 'react';
import {SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const Icon = styled(SocialIcon)`
    margin-left: 20px;
    margin-top: 80px;
    
    @media (max-width: 600px){
        margin-left:8px;
    }`;
function Social() 
{ 
  return (
    <div>
        <Icon url="http://facebook.com/profile.php?id=100051837720812" bgColor="black" fgcolor="black" />
        <Icon url="http://instagram.com/yogesh7401_/" bgColor="black" fgcolor="white" />
        <Icon url="http://github.com/yogesh7401" bgColor="black" fgcolor="white" />
        <Icon url="https://www.linkedin.com/in/yogesh-waran-ab08ab195/" bgColor="black" fgcolor="white" />
        
    </div>);
} 
  
export default Social; 