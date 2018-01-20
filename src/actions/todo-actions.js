const ADD_TODO = 'ADD_TODO';
const CHANGE_TODO_TO_ADD_NAME = 'CHANGE_TODO_TO_ADD_NAME';


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
