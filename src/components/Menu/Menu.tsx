import React from 'react';
import styled from "styled-components";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>


                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    })}

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





