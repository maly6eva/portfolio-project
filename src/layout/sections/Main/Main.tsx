import React from 'react';
import photo from '../../../assets/images/gerl1.svg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/Icon/Icon";
import {Container} from "../../../components/Container";
import {Menu} from "../../../components/Menu/Menu";
import {Button} from "../../../components/Button/Button";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <MainTitle>WEB DEVELOPER</MainTitle>
                        <Name>Ksenia Malysheva</Name>
                        <SmallText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</SmallText>
                        <Button item={'Contact Me'}/>
                    </div>

                    <Photo src={photo} alt="photo"/>

                </FlexWrapper>
                {/*<FlexWrapper align={'center'} justify={'space-around'}>*/}
                {/*/!*    <Icon iconsId={'arrow'} />*!/ псевдо*/}
                {/*</FlexWrapper>*/}
            </Container>
        </StyledMain>



    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    //background-color: #041F31;
    //background-color: #dedae6;
`
const MainTitle = styled.h1`
    font-family: Tinos, sans-serif;
        font-size: 20px;
        font-weight: 400;
    
    `
const Name = styled.h2`
        font-size: 72px;
        font-weight: 600;
        background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        color: transparent;
        -webkit-background-clip: text;
        padding-bottom: 11px;
        margin: 10px 0;
    `
    
const SmallText = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
    //padding-bottom: 29px;
`

const Photo = styled.img`
    width: 533px;
    height: 399px;
    object-fit: cover;
`
