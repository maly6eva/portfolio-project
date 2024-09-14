import React from 'react';
import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>

            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 87px;
        list-style: none;
        height: 100px;
        margin: 0 auto;
        //background-color: #041F31;
        background-color: #c6eded;
    }

`


