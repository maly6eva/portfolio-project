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

const StyledProject = styled.div`
    background-color: #b8bfbd;
    max-width: 522px;
    width: 100%;

`

const Images = styled.img`
    width: 100%;
    height: 388px;
    object-fit: cover;
`

const Title = styled.h3`
`
const Button = styled.button` 
    
`
const ButtonLink = styled.a` 
    
`





const Text = styled.p`
`

