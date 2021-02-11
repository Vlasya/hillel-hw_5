import React from "react";
import s from './ToDoItem.module.css';
import btnDel from './../../image/059-minus.svg'
import btnEdit from './../../image/063-pencil.svg'
import {useDispatch} from "react-redux";
import {deleteTask, updateTask} from "../../actions";



export const ToDoItem=({task})=>{

    let dispatch=useDispatch()

    return(

        <div className={s.wrapper}>
            <div className={s.taskInfo}>
                <div className={s.order}>№ {task.id}</div>
                <div className={s.text}>{task.text}</div>
            </div>
            <div>
                <input type="checkbox"/>
                {/*update*/}
                <button
                    onClick={()=>{dispatch(updateTask(task))
                    }}

                >
                    <img className={s.btnImg} src={btnEdit} alt="btnEdit"/>
                </button>
                {/*delete*/}
                <button
                    onClick={()=>dispatch(deleteTask(task.id))}
                >
                    <img className={s.btnImg} src={btnDel} alt="btnDel"/>
                </button>
            </div>


        </div>
    )
}