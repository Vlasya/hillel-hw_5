import {ADD_TASK,UPDATE_TASK,DELETE_TASK,ADD_UPDATE_TASK} from "../constans";
import {tasks} from '../states'

export let reducer=(state=tasks,action)=>{
    let newTasks;
    switch (action.type){
        case ADD_TASK:
            newTasks=[...state,action.payload]
            return newTasks;
        case UPDATE_TASK:
            newTasks=[...state];
            //Находим кликнутую таску
            let updateTask=newTasks.filter(task=>task.id===action.payload.id)
            console.log(updateTask)
            // меняем ей значение
            updateTask[0].edited=true
            // если id другой, то меняем его обратно на false (для любителей покликать)
            newTasks=newTasks.map(item=>{
                if(item.id!==updateTask[0].id){
                    item.edited=false
                }
                return item
            })
            return newTasks
        case DELETE_TASK:
            newTasks=[...state];
            newTasks=newTasks.filter(task=> task.id !== action.payload);
            return newTasks

        case ADD_UPDATE_TASK:
            break
        default:
            return state
    }
}