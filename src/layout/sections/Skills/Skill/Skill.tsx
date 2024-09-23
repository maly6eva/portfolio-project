import React from 'react';
import Icon from "../../../../components/Icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconsId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper align="center" direction="column" justify="center" gap="20px" >
                <Icon iconsId={props.iconsId} />
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 20%;
    margin: 20px 0 120px 0;
    
`

const SkillTitle = styled.h3`
    text-transform: uppercase;
   
   
    
`