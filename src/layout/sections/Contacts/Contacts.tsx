import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder={'Example'}/>
                <Field placeholder={'Value'} />
                <Field placeholder={'Hi, i will ...'} as={'textarea'}/>
                <Button type={'submit'}>Submit</Button>

            </StyledForm>
        </StyledContacts>
    );
};




const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: rosybrown;
   
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input``

const Button = styled.button``