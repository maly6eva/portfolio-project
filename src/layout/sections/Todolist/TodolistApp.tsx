import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import styled from "styled-components";
import {FilterValues} from "./Todolist";

type TodolistPropsType = {
    id: string,
    skil: string,
    isDone: boolean
}

type TodolistAppType = {
    title: string,
    todolist: TodolistPropsType[]
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValues) => void
    addTasks: (title: string) => void
}

export const TodolistApp = ({title, todolist, removeTasks, changeFilter, addTasks}: TodolistAppType) => {
    const [taskTitle, setTaskTitle] = useState('')

    const changeFilterHandler = (value: FilterValues) => changeFilter(value)
    const onAddTask = () => {
        addTasks(taskTitle)
        setTaskTitle('')
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAddTask()
        }
    }

    const onChangeHandler = ((e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value))


    const todo = todolist.map((el: TodolistPropsType) => {
        const removeTasksHandler = () => {
            removeTasks(el.id)
        }
        return (
            <>
                <li key={el.id}>
                    <input type="checkbox" checked={el.isDone}/> <span>{el.skil}</span>
                    <button onClick={() => {
                        removeTasks(el.id)
                    }}>x
                    </button>
                </li>
            </>
        )
    })

    function handleAddTask(e: React.SyntheticEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        addTasks(taskTitle);
        setTaskTitle('')
    }

    return (
        <div>
            <TodolistAp>
                <h3>{title}</h3>
                <Inputdiv>
                    <input value={taskTitle}
                           onChange={onChangeHandler}
                           onKeyUp={onKeyDownHandler}/>
                    <button onClick={handleAddTask}>+
                    </button>
                </Inputdiv>
                <ul>
                    {todo}
                </ul>
                <ButtonDiv>
                    <button onClick={() => {
                        changeFilterHandler('All')
                    }}>All
                    </button>
                    <button onClick={() => {
                        changeFilterHandler('Active')
                    }}>Active
                    </button>
                    <button onClick={() => {
                        changeFilterHandler('Completed')
                    }}>Completed
                    </button>
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
