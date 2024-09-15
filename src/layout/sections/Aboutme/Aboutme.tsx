import React from 'react';
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Aboutme = () => {
    return (
        <StyledAboutme>
            <FlexWrapper align={'start'} justify={'flex-start'}>
                <h2>About me</h2>

            </FlexWrapper>

            <FlexWrapper align={'center'} justify={'flex-start'}>
                <Icon iconsId={'line'}/>
                <p>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of
                    a
                    sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                    chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains
                    were
                    placed within this chamber during the Neolithic period, representing at least nine or ten
                    individuals.</p>

            </FlexWrapper>


        </StyledAboutme>
    );
};

const StyledAboutme = styled.div`
    //min-height: 100vh;
    background-color: #f3f2d7;

`