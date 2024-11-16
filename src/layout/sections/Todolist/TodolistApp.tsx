import React from 'react';
import styled from "styled-components";
import {FilterValues} from "./Todolist";

type TodolistPropsType = {
    id: number,
    skil: string,
    isDone: boolean,


}

type TodolistAppType = {
    title: string,
    todolist: TodolistPropsType[]
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValues) => void
}

export const TodolistApp = ({title, todolist, removeTasks, changeFilter}: TodolistAppType) => {

    const todo = todolist.map((el) => {
        return (
            <>
                <li key={el.id}>
                    <input type="checkbox" checked={el.isDone}/> <span>{el.skil}</span>
                    <button onClick={() => {removeTasks(el.id)}}>x
                    </button>
                </li>

            </>
        )
    })

    return (
        <div>
            <TodolistAp>
                <h3>{title}</h3>
                <Inputdiv>
                    <input/>
                    <button>+</button>
                </Inputdiv>
                <ul>
                    {todo}
                </ul>
                <ButtonDiv>
                    <button onClick={() => { changeFilter('All')}}>All</button>
                    <button onClick={() => { changeFilter('Active')}}>Active</button>
                    <button onClick={() => { changeFilter('Completed')}}>Completed</button>
                </ButtonDiv>
            </TodolistAp>
        </div>
    );
};

const TodolistAp = styled.div`
    border: 1px solid blue;
    padding: 30px 20px;
    background-color: #7c80ac;
    border-radius: 6px;
    //


    h3 {
        padding: 10px;
        font-size: 25px;
        color: #1a29d0;
    }

    ul {
        padding: 0 20px 0 20px;
    }


`
const Inputdiv = styled.div`
    background-color: #7c80ac;
`
const ButtonDiv = styled.div`
    background-color: #7c80ac;

    button {
        background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        margin: 8px auto 8px;
        list-style: none;
        padding: 8px 15px 8px 15px;
        border-radius: 6px;
    }
`
