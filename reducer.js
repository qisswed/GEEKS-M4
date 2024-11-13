import {combineReducers} from 'redux';
import MainReducer from "./MainReducer";
import TodoReducer from "./TodoReducer";
import tasksReducer from "./tasksReducer";

export const rootReducer = combineReducers({
    MainReducer,
    TodoReducer,
    tasksReducer

})