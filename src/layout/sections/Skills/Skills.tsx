import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/Icon/Icon";

import {Skill} from "./Skill/Skill";
import {Container} from "../../../components/Container";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>

                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} align={'center'} justify={'center'}>
                    <Skill iconsId={'js'} title={'JavaScript'} />
                    <Skill iconsId={'ts'} title={'typescript'}/>
                    <Skill iconsId={'mongo'} title={'mongo db'}/>
                    <Skill iconsId={'postgrest'} title={'PostgreSQL'}/>
                    <Skill iconsId={'jest'} title={'Jest'}/>
                    <Skill iconsId={'express'} title={'Express JS'}/>
                    <Skill iconsId={'next'} title={'Nest JS'}/>
                    <Skill iconsId={'docker'} title={'Docker'}/>
                    <Skill iconsId={'react'} title={'react js'}/>
                    <Skill iconsId={'reactN'} title={'react nactive'}/>
                    <Skill iconsId={'styled'} title={'Styled Components'}/>
                    <Skill iconsId={'redux'} title={'Redux'}/>
                    <Skill iconsId={'git'} title={'git'}/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    //background-color: #c7e3ac;
    min-height: 100vh;
  
`



const SectionTitle = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 108.333% */
    letter-spacing: 0.96px;
    margin: 28px 0;
    
`