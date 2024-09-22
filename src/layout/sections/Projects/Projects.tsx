import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Progect} from "./Progect/Progect";
import projimg from '../../../assets/images/project.png'
import {Menu} from "../../../components/Menu/Menu";
import {Container} from "../../../components/Container";







export const Projects = () => {
    return (
        <StyledProjects>

            <Container>
                <SectionTitle>Projects</SectionTitle>

                <FlexWrapper>
                    <Wrapper>
                        <Progect
                            src={projimg}
                            title={'TITLE PROJECT'}
                            tags={['Javascript', 'PostgreSQL', 'React', 'redux' ]}
                            text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                        />

                    </Wrapper>
                    <Wrapper>
                        <Progect src={projimg}
                                 title={'I N S I G H T G R A M'}
                                 tags={['Javascript', 'PostgreSQL', 'React' ]}
                                 text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>


                    </Wrapper>
                </FlexWrapper>
            </Container>

            
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    margin: 0 auto;
    
    
`


const Wrapper = styled.div`
`


