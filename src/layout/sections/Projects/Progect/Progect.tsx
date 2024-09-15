import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../../components/Menu/Menu";




type ProgectPropsType = {
    src?: string
    text?: string
    title?: string
    button?: string

}




export const Progect = (props: ProgectPropsType) => {
    return (
        <StyledProject>
            <Images src={props.src} alt=''/>
            <Title>{props.title}</Title>

            <Button>
                <ButtonLink href="">{props.button}</ButtonLink>
            </Button>




            <Text>{props.text}</Text>

        </StyledProject>
    );
};

const StyledProject = styled.section `
    
`

const Images = styled.img`
`

const Title = styled.h3`
`
const Button = styled.button` 
    
`
const ButtonLink = styled.a` 
    
`





const Text = styled.p`
`

