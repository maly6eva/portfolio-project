import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/Icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} align={'center'}>
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
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    //background-color: #c7e3ac;
    min-height: 100vh;
  
`



const SkillTitle = styled.h3`
    
`