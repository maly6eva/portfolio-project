import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../../components/Menu/Menu";
import {theme} from "../../../../styles/Theme";
// import {Button} from "../../../../components/Button/Button";


type ProgectPropsType = {
    src?: string
    text?: string
    title?: string
    button?: string
    tags?: string[];
}




export const Progect = ({src, text, title, tags, button}: ProgectPropsType) => {
    return (
        <StyledProject>
            <Images src={src} alt=''/>
            <Title>{title}</Title>

            <ButtonsGroup>
            {tags?.map((tag) => (
                <React.Fragment key={tag}>
                    <button>
                        <a href="#">{tag}</a>
                    </button>
                </React.Fragment>
            ) )}
            </ButtonsGroup>

            <Button>
                <ButtonLink href="">{button}</ButtonLink>
            </Button>


            <Text>{text}</Text>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: ${theme.colors.cardBg}
    max-width: 522px;
    width: 100%;
`

const Images = styled.img`
    width: 100%;
    height: 388px;
    object-fit: cover;
`

const Title = styled.h3`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 108.333% */
    letter-spacing: 0.96px;
   margin: 29px 0 11px;
`
const Button = styled.button`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
    background-color: crimson;

`
const ButtonLink = styled.a`
   
    
    
`


const Text = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
`


const ButtonsGroup = styled.div`
   
    button {
        margin: 8px auto 8px;
        list-style: none;
        padding: 12px 20px 13px 20px;
        border-radius: 6px;
        background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
      
        
    }
    a{
        color: ${theme.colors.paddingBg};
    }

`
