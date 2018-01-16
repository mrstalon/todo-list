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
        case 'SET_VISIBILITY_FILTER':
          return Object.assign({}, state, {
              todos: [
                  ...state.todos, 
                  {
                      text: action.text,
                      completed: false
                  }
              ]
          })

        case 'TOGGLE_TODO':
          return Object.assigh({}, state, {
              todos: state.todos.map((todo, index)=>{
                  if(index === action.index) {
                      return Object.assign({}, todo, {
                          completed: !todo.completed
                      })
                  }
                  return todo
              })
          })  

        default: return state;
    }
}

export const mainReducer = combineReducers({
    todos
})

