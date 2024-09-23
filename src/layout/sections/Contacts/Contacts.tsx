import React from 'react';
import styled from "styled-components";
// import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";



export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Formlabel htmlFor="username">Name</Formlabel>
                    <Field placeholder={'Example'} type="text" id="username"/>
                    <Formlabel htmlFor="username">Email</Formlabel>
                    <Field placeholder={'Value'}/>
                    <Formlabel htmlFor="username">Mensaje</Formlabel>
                    <Field placeholder={'Hi, i will ...'} as={'textarea'}/>
                    <Button>Submit</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
  
   
`

const Formlabel = styled.label`
    margin-bottom: 6px;
`

const SectionTitle = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 108.333% */
    letter-spacing: 0.96px;
    margin: 28px 0;`

const StyledForm = styled.form`
    max-width: 530px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    //gap: 48px;
    margin: 0 auto;
    color: ${theme.colors.textBg};
   

    textarea{
        border-color: ${theme.colors.textareaBorder};
        margin-bottom: 0;
        resize: none;
        height: 165px;
  
    }
    
    label{
        border-color: ${theme.colors.textareaBorder};
        margin: 48px 0 6px;
        font-family: Montserrat, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
     
    }
`
const Field = styled.input`
    font-family: Montserrat, sans-serif;
    width: 100%;
    background-color: ${theme.colors.accent};
    border: 1px solid ${theme.colors.textBg};
    padding: 15px 18px 16px;
    color: ${theme.colors.textInput};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    
    &::placeholder {
        color: ${theme.colors.textBg};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.textBg};
    }
`


const Button = styled.button`
    width: 100%;
        margin: 22px auto 8px;
        list-style: none;
        padding: 12px 20px 13px 20px;
        border-radius: 6px;
        background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    
    a{
        color: ${theme.colors.paddingBg};
    }`