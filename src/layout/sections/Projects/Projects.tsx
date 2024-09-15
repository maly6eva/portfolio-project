import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Progect} from "./Progect/Progect";
import projimg from '../../../assets/images/project.png'
import {Menu} from "../../../components/Menu/Menu";



const itemname = ['Javascript', 'PostgreSQL', 'React', 'redux']
const itemproject = ['Javascript', 'PostgreSQL', 'React']




export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>


            <FlexWrapper>

                <Wrapper>
                    <Progect src={projimg} title={'TITLE PROJECT'}/>
                    <Menu menuItems={itemname}/>


                    <Progect text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>

                </Wrapper>

                <Wrapper>
                    <Progect src={projimg} title={'I N S I G H T G R A M'}/>
                    <Menu menuItems={itemproject}/>

                    <Progect text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>

                </Wrapper>



            </FlexWrapper>
            
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #d9dbf4;
`


const Wrapper = styled.div`
`


