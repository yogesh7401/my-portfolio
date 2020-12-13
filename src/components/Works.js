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

function Works() {
  const posts =
  [
    {
      id: 1, 
      title: "Local welfare management :", 
      discription: "A dynamic website that connected to MySQL database by PHP as the backend language", 
      url: 'https://github.com/yogesh7401/Local_welfare_management', 
      image: LWM, 
      imageId: '1'
    }, 
    {
      id: 2, 
      title: "My portfolio :", 
      discription: "My first portfolio page build using Reactjs and styled components", 
      url: 'https://github.com/yogesh7401/my-portfolio', 
      image: Portfolio, 
      imageId: '2'},
    {
      id: 3, 
      title: "Face Recogination :", 
      discription: "An offline image recogination program using Python library called opencv-python", 
      url: 'https://github.com/yogesh7401/imageRecoginationPy', 
      image: FaceRecogination, 
      imageId: '3'},
    {
      id: 4, 
      title: "Vue-Calculator :", 
      discription: "A Simple calculator using Vue Js with Add , Subract , Multiple and Division operation", 
      url: 'https://github.com/yogesh7401/calculator', 
      image: Calculator, 
      imageId: '4'
    }
  ];
  const content = posts.map((post) => (
                    <Card key={post.id}
                          image={post.image} 
                          imageId={post.imageId} 
                          url={post.url} 
                          title={post.title} 
                          discription={post.discription}>
                    </Card>
                  ))
  return (
    <StyledWorks ClassName="card" id="WORKS">
      <h3>MY WORKS :</h3>
        <Cards>
          {content}
        </Cards>
    </StyledWorks>
  );
}

export default Works;
