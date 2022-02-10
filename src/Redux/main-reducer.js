import {tasksApi} from '../api/tasksApi'

const ADD_TASK = "ADD-TASK";
const DELETE_TASK = "DELETE-TASK"
const SET_TASKS = "SET-TASKS"
const SET_TASKS_AFTER_CHANGE = "SET-TASKS-AFTER-CHANGE"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_TASKS_COUNT = "SET-TOTAL-TASKS-COUNT"

let initialState = {
    tasks: [],
    page: 1,
    pageSize: 10,
    totalTasksCount: 0

}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log(state.totalTasksCount)
            let newTask = {
                userId: 1,
                id: state.totalTasksCount + 1,
                title: action.newTaskText,
                completed: false
            }
            return {
                ...state,
                tasks: [...state.tasks.concat(newTask)]
            }
        case DELETE_TASK:
            {
                const filteredState = state.tasks.filter(task => {
                    
                    return task.id !== action.id
                })
                // delete state.tasks.id == action.id
                
                return {
                    ...state,
                    tasks: filteredState
                    // tasks: state.tasks.splice(action.id),

                }
            }
        case SET_TASKS:
            return{
                ...state,
                tasks: action.tasks
            }
        case SET_TASKS_AFTER_CHANGE:
            return{
                ...state,
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state, page: action.page
            }
        }
        case SET_TOTAL_TASKS_COUNT: {
            return {
                ...state, totalTasksCount: action.count
            }
        }
        default:
            return state
    }
}

export const addTaskAC = (newTaskText) => {
    return {
        type: ADD_TASK,
        newTaskText
    }
}

export const deleteTaskAC = (id) => {
    return {
        type: DELETE_TASK,
        id
    }
}

export const setTasksAC = (tasks) => {
    return {
        type: SET_TASKS,
        tasks
    }
}
export const setTasksAfterChange = () => {
    return {
        type: SET_TASKS_AFTER_CHANGE
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}
export const setTotalTasksCount = (totalTasksCount) => {
    return {
        type: SET_TOTAL_TASKS_COUNT,
        count: totalTasksCount
    }
}

export const getTasksAC = (page, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(page))
    let response = await tasksApi.getTasks(page,pageSize)
    dispatch(setTasksAC(response))
    dispatch(setTotalTasksCount(response.length));
    
}

// export const getTasks2 = () => {
//     return async (dispatch) => {
//         dispatch(setCurrentPage(page))
//         let response = await tasksApi.getTasks(page, pageSize)
//         debugger
//         dispatch(setTasksAC(response.data))
//         console.log(state.tasks.length)
//         dispatch(setTotalTasksCount(state.tasks.length));
//     }
// }
export const getTasksAfterChange = () => {
    return (dispatch) => {
        dispatch(setTasksAfterChange())
    }
}

// export const addNewTask = (newTaskText) => {
//     dispatch(addTaskAC(newTaskText))
// }
export const addTask = (newTaskText) => {
    return async (dispatch) => {
        dispatch(addTaskAC(newTaskText));
    }
}
export const deleteTask = (id) => {
    return async (dispatch) => {
        dispatch(deleteTaskAC(id))
        dispatch(getTasksAfterChange());
    }
}





export default mainReducer