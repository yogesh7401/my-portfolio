import React from 'react';
import Loading from './Image/loader2.gif';
import styled from 'styled-components';

const Loader = styled.div`
    background-image: url(${Loading});
    height: 400px;
    left: 50%;
    margin-top: -200px;
    margin-left: -250px;
    position: absolute;
    top: 50%;
    width: 500px;
`
function LoadingScreen() 
{ 
    return (
        <div>
            <Loader />
        </div>
      );
  } 

export default LoadingScreen;