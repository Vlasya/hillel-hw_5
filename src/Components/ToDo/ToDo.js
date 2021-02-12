import s from './ToDo.module.css'
import {ToDoForm} from "../ToDoForm/ToDoForm";
import {ToDoList} from "../ToDoList/ToDoList";


export const ToDo = () => {
    return (
        <div className={s.wrapper}>
            <ToDoForm/>
            <ToDoList/>
        </div>
    )
}