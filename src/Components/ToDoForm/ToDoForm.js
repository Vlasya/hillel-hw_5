import React, {useState} from "react";
import s from './ToDoForm.module.css'
import {useSelector} from "react-redux";
import {FormInput} from "./FormInput/FormInput";
import {FormInputUpdate} from "./FormInputUpdate/FormInputUpdate";
import {ButtonForm} from "./ButtonForm/ButtonForm";
import {ButtonFormUpdate} from "./ButtonFormUpdate/ButtonFormUpdate";


export const ToDoForm = () => {
    let [name, setName] = useState('')

    //Update task
    let state = useSelector(state => state.tasks)
    let isUpdate = false
    let editTask = state.filter(item => item.edited)
    let text = ''
    if (editTask.length) {
        isUpdate = true
        text = editTask[0].text
    }

    return (
        <div className={s.wrapper}>
            <form className={s.form} action="submit">
                {!isUpdate
                    ? <FormInput value={name} getValue={(text) => setName(text)}/>
                    : <FormInputUpdate value={text}
                                       getValue={(text) => setName(text)}/>}

                {!isUpdate
                    ? <ButtonForm state={state} name={name} setName={(name) => setName(name)}/>
                    : <ButtonFormUpdate editTask={editTask} name={name} setName={(name) => setName(name)}/>}
            </form>
        </div>
    )
}

