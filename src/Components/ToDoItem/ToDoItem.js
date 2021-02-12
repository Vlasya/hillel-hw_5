import React, {useState} from "react";
import s from './ToDoItem.module.css';
import btnDel from './../../image/059-minus.svg'
import btnEdit from './../../image/063-pencil.svg'
import {useDispatch} from "react-redux";
import {completeTask, deleteTask, updateTask} from "../../actions";


export const ToDoItem = ({task}) => {
    const dispatch = useDispatch()
    const [complete, setComplete] = useState(false)

    return (
        <div className={s.wrapper}>
            <div className={s.taskInfo}>
                <div className={s.order}>№ {task.id}</div>
                {task.isCompleted
                    ? <div className={s.textComplete}>{task.text}</div>
                    : <div className={s.text}>{task.text}</div>}
            </div>
            <div>
                <input type="checkbox" onChange={() => {
                    setComplete(!complete)
                    dispatch(completeTask([task, complete]))
                }}/>
                {/*update*/}
                <button
                    onClick={() => {
                        dispatch(updateTask(task))
                    }}>
                    <img className={s.btnImg} src={btnEdit} alt="btnEdit"/>
                </button>
                {/*delete*/}
                <button
                    onClick={() =>
                        dispatch(deleteTask(task.id))}>
                    <img className={s.btnImg} src={btnDel} alt="btnDel"/>
                </button>
            </div>
        </div>
    )
}