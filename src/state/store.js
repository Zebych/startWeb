/*import {tasksReducer} from './tasks-reducer';
import {todolistsReducer} from './todolists-reducer';*/
import {combineReducers, createStore} from 'redux';


const rootReducer = combineReducers({
    // tasks: tasksReducer,
    // todolists: todolistsReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer);

