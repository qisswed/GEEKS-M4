
const initialState = {
    tasks: [],
    filter: 'all'
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        case 'SET_FILTER':
            return { ...state, filter: action.payload };
        case 'RESET_FILTER':
            return { ...state, filter: 'all' };
        default:
            return state;
    }
};

export default tasksReducer;
