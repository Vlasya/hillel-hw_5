import {ADD_TASK, DELETE_TASK, UPDATE_TASK, ADD_UPDATE_TASK, COMPLETE_TASK} from "../constans";


export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}

export function addUpdateTask(task) {
    return {
        type: ADD_UPDATE_TASK,
        payload: task
    }
}

export function completeTask([task, status]) {
    return {
        type: COMPLETE_TASK,
        payload: [task, status]
    }
}