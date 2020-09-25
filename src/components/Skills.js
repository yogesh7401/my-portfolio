import styled from 'styled-components'
import React from 'react' 
import Progress from 'gogolee-react-progress-circle';
import 'gogolee-react-progress-circle/lib/main.css';

const StyledSkill = styled.div`
    padding-top:50px;
    padding-bottom:50px;
    background : grey;

.out{
    display: flex;
    width: 900px;
    margin-left:auto;
    margin-right:auto;
} 
@media (max-width: 650px) {
    .out{
        display: inline;
    }
}
@media (max-width: 950px) {
    .out{
        width: 600px;
    }
}`
function Skills(){
    return(
        <StyledSkill>
        <h3 style={{marginLeft:"100px"}}   id="SKILLS">SKILLS :</h3>
            <div className="out" style={{marginTop:"50px"}}>
                <span id="circle">
                    <Progress number={90} width={300} height={200} isTextShown={false}>
                        <div style={{color: '#0D2538'}}>
                            <b>HTML</b>
                        </div>
                    </Progress>
                </span><br/>
                <span id="circle">
                    <Progress number={85} width={300} height={200} isTextShown={false}>
                        <div style={{color: '#0D2538'}}>
                            <b>CSS</b>
                        </div>
                    </Progress>
                </span><br/>
                <span id="circle">
                    <Progress number={70} width={300} height={200} isTextShown={false}>
                        <div style={{color: '#0D2538'}}>
                            <b>PHP</b>
                        </div>
                    </Progress>
                </span>
            </div><br/>
            <div className="out">
                <span id="circle">
                    <Progress number={70} width={300} height={200} isTextShown={false}>
                        <div style={{color: '#0D2538'}}>
                            <b>JAVASCRIPT</b>
                        </div>
                    </Progress>
                </span><br/>
                <span id="circle">
                    <Progress number={65} width={300} height={200} isTextShown={false}>
                        <div style={{color: '#0D2538'}}>
                            <b>JAVA</b>
                        </div>
                    </Progress>
                </span><br/>
                <span id="circle">
                    <Progress number={55} width={300} height={200} isTextShown={false}>
                        <div style={{color: '#0D2538'}}>
                            <b>C/C++</b>
                        </div>
                    </Progress>
                </span>
            </div>
        </StyledSkill>
    );
}

export default Skills;