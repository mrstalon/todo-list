export const initialState = {
    categoryList: [
        {
            categoryName: 'Category 1',
            todos: [
                {
                    todoName: 'Completed',
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: true,
                },
                {
                    todoName: 'UnCompleted',
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: false,
                },
                {
                    todoName: 'Completed',
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: true,
                },
                {
                    todoName: 'UnCompleted',
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: false,
                },
            ],
            id: '1',
            isChoosed: false,
            editModeIsOn: false,
            children: [
                {
                    categoryName: 'Category 1-2',
                    todos: [
                        {
                            todoName: 'task of the first root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                        {
                            todoName: 'task of the first root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                        {
                            todoName: 'task of the first root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                        {
                            todoName: 'task of the first root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                    ],
                    id: '1',
                    isChoosed: false,
                    editModeIsOn: false,
                },
            ],
        },
        {
            categoryName: 'Category 2',
            todos: [
                {
                    todoName: 'task of the second root category',
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: false,
                },
                {
                    todoName: 'task of the second root category',
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: false,
                },
                {
                    todoName: 'task of the second root category',
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: false,
                },
            ],
            id: '2',
            isChoosed: false,
            editModeIsOn: false,
            children: [
                {
                    categoryName: 'Category 2-1',
                    todos: [
                        {
                            todoName: 'task of the second root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                        {
                            todoName: 'task of the second root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                        {
                            todoName: 'task of the second root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                        {
                            todoName: 'task of the second root-child category',
                            editModeIsOn: false,
                            discription: '',
                            isCompleted: false,
                        },
                    ],
                    id: '1',
                    isChoosed: false,
                    editModeIsOn: false,
                },
            ],
        },
    ],
    choosedCategoryId: '',
    choosedCategoryName: '',
    categoryNameAfterEditing: '',
    tasksToRender: [],
    todoToAddName: '',
    categoryToAddName: '',
    showCompletedTasks: true,
};


export function todosReducer(state = initialState, action) {

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
                tasksToRender: newTasksToRender,
            });
        }

        case 'ADD_TODO': {
            const listToReturn = state.categoryList.slice();
            const currentCategoryId = splitIndexes(state.choosedCategoryId);
            let todoName = state.todoToAddName;
            let tasksToReturn = [];
            if (todoName.length === 0) {
                todoName = 'Default Todo Name';
            }
            if (currentCategoryId.length === 1) {
                listToReturn[currentCategoryId[0]].todos.unshift({
                    todoName,
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: false,
                });
                tasksToReturn = listToReturn[currentCategoryId[0]].todos;
            } else {
                listToReturn[currentCategoryId[0]].children[currentCategoryId[1]].todos.unshift({
                    todoName,
                    editModeIsOn: false,
                    discription: '',
                    isCompleted: false,
                });
                tasksToReturn = listToReturn[currentCategoryId[0]].children[currentCategoryId[1]].todos;
            }
            return Object.assign({}, state, {
                categoryList: listToReturn,
                tasksToRender: tasksToReturn,
            });
        }

        case 'CHANGE_TODO_TO_ADD_NAME': {
            return Object.assign({}, state, {
                todoToAddName: action.todoName,
            });
        }

        case 'MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE': {
            const indexes = splitIndexes(action.id);
            let categoryNameToReturn = '';

            if (indexes.length === 2) {
                categoryNameToReturn = state.categoryList[indexes[0]].children[indexes[1]].categoryName;
            } else {
                categoryNameToReturn = state.categoryList[indexes[0]].categoryName;
            }

            return Object.assign({}, state, {
                choosedCategoryId: action.id,
                choosedCategoryName: categoryNameToReturn,
            });
        }
        case 'SHOW_NESTED_CATEGORIES': {
            const listToReturn = state.categoryList;
            const index = action.id - 1;
            listToReturn[index].isChoosed = !listToReturn[index].isChoosed;
            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_CATEGORY_TO_ADD_NAME': {
            return Object.assign({}, state, {
                categoryToAddName: action.categoryName,
            });
        }

        case 'ADD_NEW_ROOT_CATEGORY': {
            const listToReturn = state.categoryList.slice();

            listToReturn.push({
                categoryName: state.categoryToAddName,
                todos: [],
                id: listToReturn.length + 1 + '',
                isChoosed: false,
                children: [],
                editModeIsOn: false,
            });

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'ADD_NESTED_CATEGORY': {
            const listToReturn = state.categoryList.slice();
            const indexes = splitIndexes(action.id);

            listToReturn[indexes[0]].children.push({
                categoryName: 'Category',
                todos: [],
                id: listToReturn[indexes[0]].children.length + 1 + '',
                isChoosed: false,
                editModeIsOn: false,
            });

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_CATEGORY_NAME': {
            const listToReturn = state.categoryList.slice();
            let choosedCategoryNameToReturn;
            const indexes = splitIndexes(action.id);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].editModeIsOn = false;
                if (action.id === state.choosedCategoryId) {
                    return Object.assign({}, state, {
                        categoryList: listToReturn,
                        categoryEditModeIsOn: false,
                        choosedCategoryName: listToReturn[indexes[0]].children[indexes[1]].categoryName,
                    });
                }
            } else {
                listToReturn[indexes[0]].editModeIsOn = false;
                if (action.id === state.choosedCategoryId) {
                    return Object.assign({}, state, {
                        categoryList: listToReturn,
                        categoryEditModeIsOn: false,
                        choosedCategoryName: listToReturn[indexes[0]].categoryName,
                    });
                }
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
                categoryEditModeIsOn: false,
            });

        }

        case 'ACTIVATE_CATEGORY_EDIT_MODE': {
            const listToReturn = state.categoryList.slice();
            const indexes = splitIndexes(action.id);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].editModeIsOn = true;
            } else {
                listToReturn[indexes[0]].editModeIsOn = true;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'DEACTIVATE_EDITINIG_CATEGORY_NAME_MODE': {
            const listToReturn = state.categoryList.slice();
            const indexes = splitIndexes(action.id);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].editModeIsOn = false;
            } else {
                listToReturn[indexes[0]].editModeIsOn = false;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_EDITING_CATEGORY_NAME': {
            const listToReturn = state.categoryList.slice();
            const indexes = splitIndexes(action.id);
            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].categoryName = action.newName;
            } else {
                listToReturn[indexes[0]].categoryName = action.newName;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'DELETE_CATEGORY': {
            const listToReturn = state.categoryList.slice();
            const indexes = splitIndexes(action.id);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children.splice(indexes[1], 1);
                listToReturn[indexes[0]].children.forEach((item, i) => {
                    item.id = i + 1 + '';
                });
            } else {
                listToReturn.splice(indexes[0], 1);
                listToReturn.forEach((item, i) => {
                    item.id = i + 1 + '';
                });
            }

            if (listToReturn.length === 0) {
                return Object.assign({}, state, {
                    categoryList: listToReturn,
                    choosedCategoryId: '',
                    tasksToRender: [],
                    choosedCategoryName: '',
                });
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'ACTIVATE_TASK_EDIT_MODE': {
            const listToReturn = state.categoryList.slice();
            const taskIndex = action.id;
            const indexes = splitIndexes(state.choosedCategoryId);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].todos[taskIndex].editModeIsOn = true;
            } else {
                listToReturn[indexes[0]].todos[taskIndex].editModeIsOn = true;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_EDITING_TASK_NAME': {
            const listToReturn = state.categoryList.slice();
            const taskIndex = action.id;
            const indexes = splitIndexes(state.choosedCategoryId);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].todos[taskIndex].todoName = action.newName;
            } else {
                listToReturn[indexes[0]].todos[taskIndex].todoName = action.newName;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'DEACTIVATE_TASK_EDIT_MODE': {
            const listToReturn = state.categoryList.slice();
            const taskIndex = action.id;
            const indexes = splitIndexes(state.choosedCategoryId);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].todos[taskIndex].editModeIsOn = false;
            } else {
                listToReturn[indexes[0]].todos[taskIndex].editModeIsOn = false;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_DESCRIPTION_OF_TASK': {
            const listToReturn = state.categoryList.slice();
            const taskIndex = action.id;
            const indexes = splitIndexes(state.choosedCategoryId);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].todos[taskIndex].discription = action.newDisc;
            } else {
                listToReturn[indexes[0]].todos[taskIndex].discription = action.newDisc;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'DELETE_TASK': {
            const listToReturn = state.categoryList.slice();
            const taskIndex = action.id;
            const indexes = splitIndexes(state.choosedCategoryId);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].todos.splice(taskIndex, 1);
            } else {
                listToReturn[indexes[0]].todos.splice(taskIndex, 1);
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_IS_TASK_COMPLETE': {
            const listToReturn = state.categoryList.slice();
            const taskIndex = action.id;
            const indexes = splitIndexes(state.choosedCategoryId);

            if (indexes.length === 2) {
                listToReturn[indexes[0]].children[indexes[1]].todos[taskIndex].isCompleted = !listToReturn[indexes[0]].children[indexes[1]].todos[taskIndex].isCompleted;
            } else {
                listToReturn[indexes[0]].todos[taskIndex].isCompleted = !listToReturn[indexes[0]].todos[taskIndex].isCompleted;
            }

            return Object.assign({}, state, {
                categoryList: listToReturn,
            });
        }

        case 'CHANGE_SORT_FILTER_SETTINGS': {
            return Object.assign({}, state, {
                showCompletedTasks: !state.showCompletedTasks,
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

