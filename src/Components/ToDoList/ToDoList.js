import React from "react";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import s from './ToDoList.module.css'
import { useSelector} from "react-redux";


export const ToDoList =()=>{
    let tasks= useSelector(state=> state);


    return(
        <div className={s.wrapper}>
            {tasks.map( task=>{
                return <ToDoItem key={task.id} task={task}/>
            })}

        </div>
    )
}