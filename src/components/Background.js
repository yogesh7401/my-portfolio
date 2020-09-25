import styled from 'styled-components';
import bgimg from './Image/bgimage.jpeg';

const Background = styled.div`
background: url(${bgimg}) no-repeat top center;
position: relative;
height: 700px;
min-height: 500px;
width: 100%;
background-size: cover !important;
-webkit-background-size: cover !important;
text-align: center;
overflow: hidden;

@media (min-height: 750px){
   height: 1024px;
}
@media (min-height: 1024px){
   height: 1300px;
}
`

export default Background;