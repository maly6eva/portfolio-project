import React from 'react';
import {Menu} from "../../components/Menu/Menu";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aquamarine;
`

