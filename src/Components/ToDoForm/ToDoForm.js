import React, {useState} from "react";
import addBtn from './../../image/067-plus.svg'
import s from './ToDoForm.module.css'
import {addTask} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../store/store";
import {FormInput} from "./FormInput/FormInput";
import {FormInputUpdate} from "./FormInputUpdate/FormInputUpdate";
import {useReducer} from 'react'
import {ButtonForm} from "./ButtonForm/ButtonForm";



export const ToDoForm = () => {

    let [name, setName] = useState('')
    let [taskEdited,setTaskEdited] =useState(false)


    //Update task
    let state = useSelector(state => state)
console.log(state)
    let isUpdate = false

    let editTask = state.filter(item => item.edited)
    debugger
    let text = ''
    if (editTask.length) {
        isUpdate=true
        text = editTask[0].text

    }
        return (
            <div className={s.wrapper}>
                <form className={s.form} action="submit">
                    {!isUpdate
                        ? <FormInput getValue={(text) => setName(text)}/>
                    : <FormInputUpdate text={text} getValue={(text) => setName(text)}/>}

                    <ButtonForm name={name} setName={(name) => setName(name)} />

                </form>
            </div>
        )

    }

