const ADD_TODO = 'ADD_TODO';
const CHANGE_TODO_TO_ADD_NAME = 'CHANGE_TODO_TO_ADD_NAME';
const CHANGE_TASKS_TO_RENDER = 'CHANGE_TASKS_TO_RENDER';
const CHANGE_EDITING_TASK_NAME = 'CHANGE_EDITING_TASK_NAME';
const ACTIVATE_TASK_EDIT_MODE = 'ACTIVATE_TASK_EDIT_MODE';
const DEACTIVATE_TASK_EDIT_MODE = 'DEACTIVATE_TASK_EDIT_MODE';
const CHANGE_DESCRIPTION_OF_TASK = 'CHANGE_DESCRIPTION_OF_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_IS_TASK_COMPLETE = 'CHANGE_IS_TASK_COMPLETE';
const CHANGE_SORT_FILTER_SETTINGS = 'CHANGE_SORT_FILTER_SETTINGS';


export function addTodo() {
    return {
        type: ADD_TODO,
    };
}

export function changeTodoToAddName(todoName) {
    return {
        type: CHANGE_TODO_TO_ADD_NAME,
        todoName,
    };
}

export function changeSortFilterSettings() {
    return {
        type: CHANGE_SORT_FILTER_SETTINGS,
    };
}

export function changeIsTaskComplete(id) {
    return {
        type: CHANGE_IS_TASK_COMPLETE,
        id,
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id,
    };
}

export function changeDescriptionOfTask(newDisc, id) {
    return {
        type: CHANGE_DESCRIPTION_OF_TASK,
        newDisc,
        id,
    };
}

export function changeTasksToRender(id) {
    return {
        type: CHANGE_TASKS_TO_RENDER,
        id,
    };
}

export function activateEditMode(id) {
    return {
        type: ACTIVATE_TASK_EDIT_MODE,
        id,
    };
}

export function deactivateEditMode(id) {
    return {
        type: DEACTIVATE_TASK_EDIT_MODE,
        id,
    };
}

export function changeEditingTaskName(newName, id) {
    return {
        type: CHANGE_EDITING_TASK_NAME,
        newName,
        id,
    };
}
