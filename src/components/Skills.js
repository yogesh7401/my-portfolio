import styled from 'styled-components'
import React from 'react' 
import ProgressBar from 'react-bootstrap/esm/ProgressBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledSkill = styled.div`
    padding-top:50px;
    padding-bottom:50px;
    background : grey;
.out{
    margin-top: 50px;
} `


function Skills(){

const skills =
  [
    {
        id: 1, 
        language: 'HTML',
        progress: '90'
    },
    {
        id: 2, 
        language: 'CSS',
        progress: '80'
    },
    {
        id: 3, 
        language: 'PHP',
        progress: '70'
    },
    {
        id: 4, 
        language: 'Java Script',
        progress: '70'
    },
    {
        id: 5, 
        language: 'Java',
        progress: '70'
    },
    {
        id: 6, 
        language: 'C/C++',
        progress: '65'
    },
  ];
  
const content = skills.map((skill) => (
    <Row style={{marginTop:"30px"}} key={skill.id} >
        <Col xs={2} ></Col>
        <Col xs={8}>
            <h5 style={{marginTop:"20px"}}>{skill.language}</h5>
            <ProgressBar animated now={skill.progress} label={`${skill.progress}%`} style={{marginTop:"20px"}} />
        </Col>
        <Col xs={2}></Col>
    </Row>
  ))
    
return(
    <StyledSkill>
        <h4 style={{textAlign:'center'}}   id="SKILLS">SKILLS </h4>
        <Container className="out">
                {content}
        </Container>
    </StyledSkill>
    );
}

export default Skills;