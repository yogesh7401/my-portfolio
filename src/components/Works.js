 import React from 'react'
 import styled from 'styled-components'
 import Card from './Card'
 import Cards from './Cards'
 import LWM from './Image/LWM.PNG'
 import Portfolio from './Image/Portfolio.PNG'
 import FaceRecogination from './Image/Face.PNG'
 import Calculator from './Image/Calculator.PNG'
 import bg from './Image/noisy.png'
 

 const StyledWorks = styled.div`
    background-image: url(${bg});
    position: relative;
    height: auto;
    padding: 50px 20% 50px 20%;

    @media (max-width : 1000px){
        padding :70px 10% 70px 10%;
    }
    @media (max-width:900px){
        padding :70px 5% 70px 5%;
    }
    @media (max-width:900px){
        padding :70px 15% 70px 15%;
    }

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
`
const title = ["Local welfare management :" , "My portfolio :" , "Face Recogination :" , "Vue-Calculator"];
const discription = ["A dynamic website that connected to MySQL database by PHP as the backend language",
                    "My first portfolio page build using Reactjs and styled components" , 
		    "An offline image recogination program using Python library called opencv-python" ,
		    "A Simple calculator using Vue Js with Add , Subract , Multiple and Division operation"]
const url = ['https://github.com/yogesh7401/Local_welfare_management','https://github.com/yogesh7401/my-portfolio',
			'https://github.com/yogesh7401/imageRecoginationPy','https://github.com/yogesh7401/calculator'];
const image = [LWM,Portfolio,FaceRecogination,Calculator];
const imageId = [1,2,3,4];
 
class Works extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      list: [0,1,2,3],
    };
  }
 
  render() {
    return (
          <StyledWorks ClassName="card" id="WORKS">
              <h3>MY WORKS :</h3>
              <Cards>
              {this.state.list.map(item => (
                  <Card image={image[item]} 
                        imageId={imageId[item]} 
                        url={url[item]} 
                        title={title[item]} 
                        discription={discription[item]}></Card>
                  ))}
              </Cards>
          </StyledWorks>
    );
  }
}

export default Works;
