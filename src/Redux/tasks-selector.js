import {createSelector} from 'reselect'

const getTasksSelector = (state) => {
    return state.mainContentPage.tasks;
}

export const getTasks = createSelector(getTasksSelector,
    (tasks) => {
        return tasks.filter(t => true)
    })

export const getNewTaskText = (state) => {
    return state.mainContentPage.newTaskText;
}
export const getPageSize = (state) => {
    return state.mainContentPage.pageSize;
}
export const getTotalTasksCount = (state) => {
    return state.mainContentPage.totalTasksCount;
}
export const getPage = (state) => {
    return state.mainContentPage.page;
}