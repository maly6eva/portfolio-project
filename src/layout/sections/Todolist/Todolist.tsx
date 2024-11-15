import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TodolistApp} from "./TodolistApp";

export const Todolist = () => {
    const text1 = 'What to learn'
    const text2 = 'What to teach'
    const text3 = 'Always learn'

    const todo = [
        {id: 1, skil: 'HTML/CSS', isDone: false},
        {id: 2, skil: 'react', isDone: true},
        {id: 3, skil: 'redux', isDone: true},

    ]

    const todo2 = [
        {id: 1, skil: 'PostgreSQL', isDone: true},
        {id: 2, skil: 'typescript', isDone: true},
        {id: 3, skil: 'JavaScript', isDone: false},
        {id: 3, skil: 'react nactive', isDone: false},
    ]


    const todo3 = [
        {id: 1, skil: 'Nest JS', isDone: true},
        {id: 2, skil: 'Docker', isDone: true},
        {id: 3, skil: 'react js', isDone: false},
        {id: 3, skil: 'git', isDone: false},
        {id: 3, skil: 'react nactive', isDone: false},
    ]


    return (
        <Todolistsection>
            <Container>
                <FlexWrapper direction={'row'} justify={'space-between'}>
                    <TodolistApp title={text1} todolist={todo} />
                    <TodolistApp title={text2} todolist={todo2}/>
                    <TodolistApp title={text3}  todolist={todo3}/>
                 </FlexWrapper>
            </Container>

        </Todolistsection>
    );
};

const Todolistsection = styled.section`
    min-height: 40vh;
    color: aqua;

`
