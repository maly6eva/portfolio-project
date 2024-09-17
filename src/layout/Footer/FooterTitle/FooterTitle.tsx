import React from 'react';
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";

type FooterTitleProps = {
    iconsId: string
    text: string

}

export const FooterTitle = (props: FooterTitleProps ) => {
    return (
        <StyleFooter>
            <Icon width={'38px'} height={'38px'} viewBox={'0 0 38px 38px'} iconsId={props.iconsId}/>
            <FooterText>{props.text}</FooterText>

        </StyleFooter>
    );
};



const StyleFooter = styled.div`
`

const FooterText = styled.p`
`