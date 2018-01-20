import { combineReducers } from 'redux';

export const initialState = {
    categoryList: [
        {
            categoryName: 'Category 1',
            todos: [
                {
                    text: 'task of the first root category',
                },
                {
                    text: 'task of the first root category',
                },
                {
                    text: 'task of the first root category',
                },
                {
                    text: 'task of the first root category',
                },
            ],
            id: '1',
            isChoosed: false,
            children: [
                {
                    categoryName: 'Category 1-2',
                    todos: [
                        {
                            text: 'task of the first root-child category',
                        },
                        {
                            text: 'task of the first root-child category',
                        },
                        {
                            text: 'task of the first root-child category',
                        },
                        {
                            text: 'task of the first root-child category',
                        },
                    ],
                    id: '1',
                    isChoosed: false,
                },
            ],
        },
        {
            categoryName: 'Category 2',
            todos: [
                {
                    text: 'task of the second root category',
                },
                {
                    text: 'task of the second root category',
                },
                {
                    text: 'task of the second root category',
                },
            ],
            id: '2',
            isChoosed: false,
            children: [
                {
                    categoryName: 'Category 2-1',
                    todos: [
                        {
                            text: 'task of the second root-child category',
                        },
                        {
                            text: 'task of the second root-child category',
                        },
                        {
                            text: 'task of the second root-child category',
                        },
                        {
                            text: 'task of the second root-child category',
                        },
                    ],
                    id: '1',
                    isChoosed: false,
                },
            ],
        },
    ],
    choosedCategoryId: '',
    tasksToRender: [],
    todoToAddName: '',
    categoryToAddName: '',
};


function todosReducer(state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_TASKS_TO_RENDER': {
            let newTasksToRender = [];
            const indexes = splitIndexes(action.id);
            if (indexes.length === 1) {
                newTasksToRender = state.categoryList[indexes[0]].todos;
            } else {
                newTasksToRender = state.categoryList[indexes[0]].children[indexes[1]].todos;
            }
            return Object.assign({}, state, {
                ...state,
                tasksToRender: newTasksToRender,
            });
        }

        case 'ADD_TODO': {
            const listToReturn = state.categoryList;
            const currentCategoryId = splitIndexes(state.choosedCategoryId);
            let todoName = state.todoToAddName;
            if (todoName.length === 0) {
                todoName = 'Default Todo Name';
            }
            if (currentCategoryId.length === 1) {
                listToReturn[currentCategoryId[0]].todos.unshift({
                    text: todoName,
                });
            } else {
                listToReturn[currentCategoryId[0]].children[currentCategoryId[1]].todos.unshift({
                    text: todoName,
                });
            }
            return Object.assign({}, state, {
                ...state,
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_TODO_TO_ADD_NAME': {
            return Object.assign({}, state, {
                ...state,
                todoToAddName: action.todoName,
            });
        }

        default: return state;
    }

    function splitIndexes(index) {
        // here i am splitting index string to an array of nums where each number represent category id
        // specifically, first index from array is a root category index, second it's childCategory index(if it exists)
        const splittedIndexes = index.split('').map((item) => {
            return +item - 1;
        });

        return splittedIndexes;
    }
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE': {
            return Object.assign({}, state, {
                ...state,
                choosedCategoryId: action.id,
            });
        }
        case 'SHOW_NESTED_CATEGORIES': {
            const listToReturn = state.categoryList;
            const index = action.id - 1;
            listToReturn[index].isChoosed = !listToReturn[index].isChoosed;
            return Object.assign({}, state, {
                ...state,
                categoryList: listToReturn,
            });
        }
        default: return state;
    }
}


export const mainReducer = combineReducers({
    todosReducer,
    categoryReducer,
});
