import {combineReducers} from 'redux';

const initialState = {
    todos: [
        {
            text: '1',
            completed: false
        }, 
        {
            text: '2',
            completed: false
        },
        {
            text: '3',
            completed: false
        }
    ]
}



function todos(state = initialState, action) {

    switch(action.type ){
        case 'ADD_TODO':
          return Object.assign({}, state, {
              ...state,
              todos: [
                  ...state.todos,
                  {
                      text: action.text,
                      completed: false
                  }
              ]
          })

        default: return state;
    }
}

export const mainReducer = combineReducers({
    todos
})

