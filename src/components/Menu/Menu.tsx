import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


type menuItemsProps = {
    item: string;

}

export const Menu = (props:menuItemsProps) => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="#">{props.item}</a>
                </li>
            </ul>

        </StyledMenu>
    );
}
;
const StyledMenu = styled.nav`
    ul {
        padding: 12px 20px 13px 20px;
    }
    
    a{
            background-color: unset;
            border: none;
        padding: 12px 20px 13px 20px;
    
        
        &:hover{
            color: ${theme.colors.paddingBg};
               border-radius: 6px;
             background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        }

`






