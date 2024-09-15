import React from 'react';
import Icon from "../../../../components/Icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconsId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconsId={props.iconsId} />
            <SkillTitle>{props.title}</SkillTitle>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 20%;
    //min-height: 100vh;
`

const SkillTitle = styled.h3`
    
`