import React,{useState} from "react";

import s from './FormInput.module.css'



export const FormInput=({getValue})=>{

    let [nameForm,setNameForm]=useState('')
    return(
        <div>
            <input
                placeholder='Enter your task...'
                onChange={(event)=>{
                    {setNameForm(event.target.value)
                        getValue(nameForm)}

                }}
                value={nameForm}
                className={s.inputArea}
                type="text" />
        </div>
    )
}