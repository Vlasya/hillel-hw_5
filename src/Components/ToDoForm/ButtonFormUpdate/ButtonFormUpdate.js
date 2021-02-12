import React from "react";
import {addUpdateTask} from "../../../actions";
import addBtn from "../../../image/067-plus.svg";
import {useDispatch} from 'react-redux';
import s from './ButtonFormUpdate.module.css'


export const ButtonFormUpdate = ({name, editTask, setName}) => {
    const [task] = editTask
    const {id} = task
    const dispatch = useDispatch()

    //убираем кнопку добавить,есди пустое поле
    let disable = false;
    if (name === "") {
        return !disable
    }
    return (
        <div>
            <button className={s.btnAdd}
                    disabled={disable}
                    onClick={(event) => {
                        dispatch(addUpdateTask({
                            id: id,
                            text: name,
                            isCompleted: false,
                            edited: false
                        }))
                        setName('')
                        event.preventDefault()
                    }
                    }>
                <img className={s.addBtnImg} src={addBtn} alt="addBtn"/>
            </button>
        </div>
    )
}