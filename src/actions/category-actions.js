const SHOW_NESTED_CATEGORIES = 'SHOW_NESTED_CATEGORIES';
const MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE = 'MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE';
const CHANGE_TASKS_TO_RENDER = 'CHANGE_TASKS_TO_RENDER';
const ADD_NEW_ROOT_CATEGORY = 'ADD_NEW_ROOT_CATEGORY';
const CHANGE_CATEGORY_TO_ADD_NAME = 'CHANGE_CATEGORY_TO_ADD_NAME';

export function showNestedCategories(id) {
    return {
        type: SHOW_NESTED_CATEGORIES,
        id,
    };
}

export function matchCurrentCategoryAsChoosedOne(id) {
    return {
        type: MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE,
        id,
    };
}

export function changeTasksToRender(id) {
    return {
        type: CHANGE_TASKS_TO_RENDER,
        id,
    };
}

export function addNewRootCategory() {
    return {
        type: ADD_NEW_ROOT_CATEGORY,
    };
}

export function changeCategoryToAddName(categoryName) {
    return {
        type: CHANGE_CATEGORY_TO_ADD_NAME,
        categoryName,
    };
}
