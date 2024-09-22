import React from 'react';
import {Menu} from "../../components/Menu/Menu";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'end'} gap={'87px'}>
                    <Menu item={'Home'}/>
                    <Menu item={'Projects'}/>
                    <Menu item={'Contact'}/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    min-height: 20vh;

`



// const items = ['Home','Projects','Contact']
//
// export const Header = () => {
//     return (
//         <StyledHeader>
//             <Container>
//                 {/*<FlexWrapper justify={'space-between'} align={'center'}>*/}
//
//                 <Menu menuItems={items}/>
//                 {/*</FlexWrapper>*/}
//             </Container>
//         </StyledHeader>
//     );
// };
//
// const StyledHeader = styled.header`
//     //min-height: 20vh;
//
// `
