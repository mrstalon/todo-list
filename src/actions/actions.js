const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}


