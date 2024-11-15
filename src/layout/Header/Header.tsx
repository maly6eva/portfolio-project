import React from 'react';
import {Menu} from "../../components/Menu/Menu";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>

                        <Menu item={'Home'}/>

                    <FlexWrapper>
                        <Menu item={'Projects'} />
                        <Menu item={'Contact'}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    //z-index: 999;
   
   
`

const Container = styled.div`
    padding: 28px 43px;
    max-width: 1130px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;

    text-align: start;

    
    div:hover{
        color: ${theme.colors.paddingBg};
    }

    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
        
    }
`
const FlexWrapperrr = styled.div`
    display: flex;
    
    

 



  
`