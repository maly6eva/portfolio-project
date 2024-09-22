import React from 'react';
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Aboutme = () => {
    return (
        <StyledAboutme>
            <Container>
                <FlexWrapper align={'start'} justify={'flex-start'}>
                    <h2>About me</h2>

                </FlexWrapper>

                <FlexWrapper align={'center'} justify={'flex-start'} gap={'1px'}>
                    <Icon iconsId={'line'} width={'220px'}/>
                    <p>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of
                        a
                        sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                        chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains
                        were
                        placed within this chamber during the Neolithic period, representing at least nine or ten
                        individuals.</p>

                </FlexWrapper>
            </Container>
        </StyledAboutme>
    );
};

const StyledAboutme = styled.div`
    min-height: 20vh;
   h2{
       font-size: 24px;
       font-style: normal;
       font-weight: 600;
       line-height: 26px; /* 108.333% */
       letter-spacing: 0.96px;
   }

`