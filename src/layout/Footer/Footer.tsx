import React from 'react';
import styled from "styled-components";
import Icon from "../../components/Icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FooterTitle} from "./FooterTitle/FooterTitle";

export const Footer = () => {
    return (
        <StyledFooter>

            <FlexWrapper direction={'column'} align={'center'}>
                <SocialList>
                    <SocialItem>
                        <SocialIconsLink>
                            <FooterTitle iconsId={'gmail'} text={'gmail'}/>
                        </SocialIconsLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconsLink>
                            <FooterTitle  iconsId={'linkedin'} text={'linkedin'}/>
                        </SocialIconsLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconsLink>
                            <FooterTitle  iconsId={'hithub'} text={'hithub'}/>
                        </SocialIconsLink>
                    </SocialItem>

                </SocialList>
                <FlexWrapper align={'center'} gap={'48px'}>
                <Link href="">Projects</Link>
                <Link href="">Contact</Link>
                </FlexWrapper>
                <Copyrght>WEB DEVELOPER 2021</Copyrght>
            </FlexWrapper>


        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    min-height: 20vh;
`


const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
`

const SocialIconsLink = styled.a`
`


const Copyrght = styled.small`
`

const Link = styled.a`

`