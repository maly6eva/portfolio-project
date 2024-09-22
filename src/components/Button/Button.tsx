import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


type menuItemsProps = {
    item: string;

}

export const Button = (props:menuItemsProps) => {
        return (
            <StyledButton>
                <ul>
                    <li>
                        <a href="#">{props.item}</a>
                    </li>
                </ul>

            </StyledButton>
        );
    }
;
const StyledButton = styled.nav`
    ul {
        display: flex;
        justify-content: start;
        align-items: center;
        list-style: none;
        height: 100px;
        margin: 0 auto;
    }
    li {
        padding: 12px 20px 13px 20px;
        border-radius: 6px;
        background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        color: ${theme.colors.paddingBg};
    }

`