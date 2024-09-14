import React from 'react';
import photo from '../../../assets/images/gerl1.svg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/Icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
            <div>
                <h1>WEB DEVELOPER</h1>
                <h2>Ksenia Malysheva</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                <button><a href="">Contact Me</a></button>
            </div>

            <Photo src={photo} alt="photo"/>

            </FlexWrapper>
            <FlexWrapper align={'center'} justify={'space-around'}>
            <Icon iconsId={'arrow'} />
            </FlexWrapper>

        </StyledMain>



    );
};

const StyledMain = styled.div`
    //min-height: 100vh;
    //background-color: #041F31;
    background-color: #dedae6;
`

const Photo = styled.img`
    width: 533px;
    height: 399px;
`
