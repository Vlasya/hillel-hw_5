import {ADD_TASK, UPDATE_TASK, DELETE_TASK, ADD_UPDATE_TASK, COMPLETE_TASK} from "../constans";
import {tasks} from '../states'


export let reducer = (state = tasks, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]

        case UPDATE_TASK:
            let newTasks = [...state];
            let updateTask = newTasks.filter(task => task.id === action.payload.id)
            updateTask[0].edited = true
            // если id другой, то меняем его обратно на false
            newTasks = newTasks.map(item => {
                if (item.id !== updateTask[0].id) {
                    item.edited = false
                }
                return item
            })
            return newTasks

        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload);

        case ADD_UPDATE_TASK:
            let newStat = [...state]
            let taskId = action.payload.id - 1
            newStat.splice(taskId, 1, action.payload)
            return newStat

        case COMPLETE_TASK:
            const [task, status] = action.payload
            const newState = [...state]
            newState.map(item => {
                if (task.id === item.id) {
                    item.isCompleted = !status
                }
                return item
            })
            return newState

        default:
            return state
    }
}