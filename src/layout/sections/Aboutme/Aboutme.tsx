import React from 'react';
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Aboutme = () => {
    return (
        <StyledAboutme>
            <Container>
                {/*<FlexWrapper align={'start'} justify={'flex-start'}>*/}
                <FlexWrapper direction={'column'} align={'left'} justify={'flex-start'} gap={'1px'}>
                    <StyledName>About me</StyledName>

                {/*</FlexWrapper>*/}

                {/*<FlexWrapper align={'center'} justify={'flex-start'} gap={'1px'}>*/}
                {/*    <Icon iconsId={'line'} width={'220px'}/>*/}
                    <StyledText>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of
                        a
                        sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                        chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains
                        were
                        placed within this chamber during the Neolithic period, representing at least nine or ten
                        individuals.</StyledText>

                </FlexWrapper>
            </Container>
        </StyledAboutme>
    );
};

const StyledAboutme = styled.div`
    min-height: 260px;
    
    
    `

   const StyledName = styled.h2`
       font-size: 24px;
       font-style: normal;
       font-weight: 600;
       line-height: 26px; /* 108.333% */
       letter-spacing: 0.96px;
       margin: 20px 0;
       position: relative;
       
       
       &:before {
           content: '';
           display: inline-block;
           width: 116px;
           height: 5px;
           transform: rotate(-90deg);
           background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
           position: absolute;
           left: -7%;
           bottom: -340%;
       }
   `

const StyledText = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.72px;
    max-width: 845px;
`

