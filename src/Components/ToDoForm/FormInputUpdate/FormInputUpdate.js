import React, {useState} from "react";
import s from './FormInputUpdate.module.css'

export const FormInputUpdate = ({value, getValue}) => {
    let [nameForm, setNameForm] = useState(value)
    return <div>
        <input
            placeholder='Enter your task...'
            onChange={(event) => {
                setNameForm(event.target.value)
                getValue(nameForm)
            }}
            value={nameForm}
            className={s.inputArea}
            type="text"/>
    </div>
}