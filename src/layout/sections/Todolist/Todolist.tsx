import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TodolistApp} from "./TodolistApp";
import {v1} from "uuid";


export type FilterValues = 'All' | 'Active' | 'Completed'

export const Todolist = () => {
    const text1 = 'What to learn'

    let  [todo, setTodo] = useState ([
        {id: v1(), skil: 'HTML/CSS', isDone: false},
        {id: v1(), skil: 'react', isDone: true},
        {id: v1(), skil: 'redux', isDone: true},

    ])

    let [filter, setFilter] = useState<FilterValues>('All')

    function addTasks(title: string) {
        const newTask = {id: v1(), skil: title, isDone: true}
        const newTasks = [newTask, ...todo]
        setTodo(newTasks)
    }

    function removeTasks(id: string) {
        let resultTasks = todo.filter((t) => {
            return t.id !== id
        })
        setTodo(resultTasks)
    }

    function changeFilter(value: FilterValues) {
        setFilter(value)
    }

    let todoForTodolist = todo;
    if(filter === 'Completed') {
        todoForTodolist = todo.filter(t => t.isDone === true)
    }

    if(filter === 'Active') {
        todoForTodolist = todo.filter(t => t.isDone === false)
    }


    return (
        <Todolistsection>
            <Container>
                <FlexWrapper direction={'row'} justify={'space-between'}>
                    <TodolistApp title={text1}
                                 todolist={todoForTodolist}
                                 removeTasks={removeTasks}
                                 changeFilter={changeFilter}
                                 addTasks={addTasks}/>
                 </FlexWrapper>
            </Container>

        </Todolistsection>
    );
};

const Todolistsection = styled.section`
    min-height: 40vh;
    color: aqua;

`
