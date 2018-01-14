import {each} from 'lodash';

const initialState = {
    categoryList: [
        {
            type: 'category',
            children: [
                    {
                        type: 'category',
                        children: [
                            {
                                type: 'category',
                                children: [],
                                name: 'ChildChildCategory 1',
                                id: '111',
                                margin: 70,
                                isChoosed: false
                            },
                            {
                                type: 'category',
                                children: [],
                                name: 'ChildChildCategory 2',
                                id: '112',
                                margin: 70,
                                isChoosed: false
                            }
                        ],
                        name: 'ChildCategory 1',
                        id: '11',
                        margin: 50,
                        isChoosed: false
                    },
                    {
                        type: 'category',
                        children: [],
                        name: 'ChildCategory 2',
                        id: '12',   
                        margin: 50,
                        isChoosed: false
                    }
            ],
            name: 'Category 1',
            id: '1',
            margin: 30,
            isChoosed: true
        },
        {
            type: 'category',
            children: [],
            name: 'Category 2',
            id: '2',
            margin: 30,
            isChoosed: false
        },
        {
            type: 'category',
            children: [],
            name: 'Category 3',
            id: '3',
            margin: 30,
            isChoosed: false
        }
    ]
};

const testInitialState = {
    categoryList: [
        {
            type: 'category',
            children: [
                    {
                        type: 'category',
                        children: [],
                        name: 'ChildCategory 1',
                        id: 1,
                        margin: 50,
                        width: 356   
                    },
                    {
                        type: 'category',
                        children: [],
                        name: 'ChildCategory 2',
                        id: 2,   
                        margin: 50,
                        width: 356
                    }
            ],
            name: 'Category 1',
            id: 1,
            margin: 30,
            width: 356
        },
        {
            type: 'category',
            children: [],
            name: 'Category 2',
            id: 2,
            margin: 30,
            width: 356
        },
        {
            type: 'category',
            children: [],
            name: 'Category 3',
            id: 3,
            margin: 30,
            width: 356
        }
    ]
};
  
export default function userstate(state = initialState, action) {

    switch (action.type) {
        case 'SHOW_MORE_CATEGORIES':
        const categoryToReturn = showCategoryChildren(action.payload);
        return {
            ...state,
            categoryList: categoryToReturn
        }
        break;

        default: return state;
    }

    

    function showCategoryChildren(index) {
        let splittedIndexes = index.split('');
        splittedIndexes = splittedIndexes.map((item)=>{
            return +item - 1;
        }); 
        console.log(splittedIndexes);
        let categoryToReturn = state.categoryList;
        
        if(splittedIndexes.length === 1) {
            categoryToReturn[+splittedIndexes[0]].children.forEach((item)=>{
                item.isChoosed = true;
            });
        }

        return categoryToReturn;
    }

}

