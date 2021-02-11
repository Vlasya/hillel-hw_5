import React from "react";
import s from './ButtonForm.module.css'
import {addTask} from "../../../actions";
import addBtn from "../../../image/067-plus.svg";
import {useDispatch} from "react-redux";


export const ButtonForm=(props)=>{

    const{name,setName,setTaskEdited}=props
    console.log(name)
    let dispatch= useDispatch()
    return(
        <div>
            <button className={s.btnAdd}
                    onClick={(event) => {
                        dispatch(addTask({
                            id: 1,
                            text: name,
                            isCompleted: false,
                            edited: false
                        }))
                        event.preventDefault()
                        //clear field
                        // setTaskEdited(true)

                    }
                    }>
                <img className={s.addBtnImg} src={addBtn} alt="addBtn"/>
            </button>
        </div>
    )
}