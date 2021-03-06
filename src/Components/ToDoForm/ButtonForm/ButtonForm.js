import React from "react";
import s from './ButtonForm.module.css'
import {addTask} from "../../../actions";
import addBtn from "../../../image/067-plus.svg";
import {useDispatch} from "react-redux";


export const ButtonForm = ({state, name, setName}) => {
    let dispatch = useDispatch()
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
                        dispatch(addTask({
                            id: state.length + 1,
                            text: name,
                            isCompleted: false,
                            edited: false
                        }))
                        event.preventDefault()
                        setName('')
                    }
                    }>
                <img className={s.addBtnImg} src={addBtn} alt="addBtn"/>
            </button>
        </div>
    )
}