const SHOW_NESTED_CATEGORIES = 'SHOW_NESTED_CATEGORIES';
const MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE = 'MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE';
const ADD_NEW_ROOT_CATEGORY = 'ADD_NEW_ROOT_CATEGORY';
const CHANGE_CATEGORY_TO_ADD_NAME = 'CHANGE_CATEGORY_TO_ADD_NAME';
const ADD_NESTED_CATEGORY = 'ADD_NESTED_CATEGORY';
const CHANGE_CATEGORY_NAME = 'CHANGE_CATEGORY_NAME';
const ACTIVATE_CATEGORY_EDIT_MODE = 'ACTIVATE_CATEGORY_EDIT_MODE';
const CHANGE_EDITING_CATEGORY_NAME = 'CHANGE_EDITING_CATEGORY_NAME';
const DEACTIVATE_EDITINIG_CATEGORY_NAME_MODE = 'DEACTIVATE_EDITINIG_CATEGORY_NAME_MODE';
const DELETE_CATEGORY = 'DELETE_CATEGORY';


export function showNestedCategories(id) {
    return {
        type: SHOW_NESTED_CATEGORIES,
        id,
    };
}

export function deleteCategory(id) {
    return {
        type: DELETE_CATEGORY,
        id,
    };
}

export function deactivateEditinigCategoryNameMode() {
    return {
        type: DEACTIVATE_EDITINIG_CATEGORY_NAME_MODE,
    };
}

export function activateEditMode(id, newName) {
    return {
        type: ACTIVATE_CATEGORY_EDIT_MODE,
        id,
        newName,
    };
}

export function changeEditingCategoryName(newName, id) {
    return {
        type: CHANGE_EDITING_CATEGORY_NAME,
        newName,
        id,
    };
}

export function changeCategoryName(id) {
    return {
        type: CHANGE_CATEGORY_NAME,
        id,
    };
}

export function matchCurrentCategoryAsChoosedOne(id) {
    return {
        type: MATCH_CURRENT_CATEGORY_AS_CHOOSED_ONE,
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

export function addNestedCategory(id) {
    return {
        type: ADD_NESTED_CATEGORY,
        id,
    };
}
