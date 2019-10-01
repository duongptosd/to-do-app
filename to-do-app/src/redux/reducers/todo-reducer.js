import TO_DO_ACTIONS from '../actions/todo-actions';

const initState = {
    tasks: []
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case TO_DO_ACTIONS.NEW_TASK:
            return {
                ...state,
                tasks: [1]
            };
        case TO_DO_ACTIONS.EDIT_TASK:
            return {
                ...state,
                tasks: [2]
            };
        case TO_DO_ACTIONS.DELETE_TASK:
            return {
                ...state,
                tasks: []
            };
    }
}

export default todoReducer;