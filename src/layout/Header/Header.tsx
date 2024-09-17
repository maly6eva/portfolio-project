import React from 'react';
import {Menu} from "../../components/Menu/Menu";
import styled from "styled-components";


const items = ['Home','Projects','Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    //min-height: 20vh;
    background-color: aquamarine;
`

