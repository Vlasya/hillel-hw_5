
import {ADD_TASK} from "../constans";
import { DELETE_TASK} from "../constans";
import { UPDATE_TASK} from "../constans";
import {ADD_UPDATE_TASK} from "../constans";

export function addTask (task){
    return{
        type:ADD_TASK,
        payload:task
    }
}

export function deleteTask (taskId){
    return{
        type:DELETE_TASK,
        payload:taskId
    }
}

export function updateTask (task){
    return{
        type:UPDATE_TASK,
        payload:task
    }
}

export function addUpdateTask(task){
    return{
        type:ADD_UPDATE_TASK,
        payload:task
    }
}