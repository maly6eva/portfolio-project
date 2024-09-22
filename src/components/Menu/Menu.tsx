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
        display: flex;
        justify-content: end;
        align-items: center;
        list-style: none;
        height: 100px;
        margin: 0 auto;
    }
    li:hover {
        padding: 12px 20px 13px 20px;
        border-radius: 6px;
        background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        background-color: ${theme.colors.paddingBg};
    }

`




// export const Menu = (props: {menuItems: Array<string>}) => {
//     return (
//         <StyledMenu>
//
//             <ul>
//                 {props.menuItems.map((item: string, index: number) => {
//                     return <li key={index}>
//                         <a href="#">{item}</a>
//                     </li>
//                 })}
//
//             </ul>
//
//         </StyledMenu>
//     );
// };
// const StyledMenu = styled.nav`
//     ul {
//         display: flex;
//         justify-content: end;
//         align-items: center;
//         gap: 87px;
//         list-style: none;
//         height: 100px;
//         margin: 0 auto;
//     }
//
//     li:first-child {
//         display: flex;
//         justify-content: start;
//         gap: 200px;
//
//     }
//
// `



