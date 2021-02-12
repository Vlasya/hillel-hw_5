import React from "react";
import s from './FormInput.module.css'



export const FormInput=({getValue,value})=>{
    return(
        <div className={s.wrapper}>
            <input
                placeholder='Enter your task...'
                onChange={(event)=>{
                        getValue(event.target.value)}
                }
                value={value}
                className={s.inputArea}
                type="text" />
        </div>
    )
}