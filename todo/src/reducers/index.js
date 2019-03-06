
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = { 
    todos: [
        {heading: "taskOne", description: "this is the first task", completed: false, id: Date.now()}
    ] 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            const newTodo = {
                ...action.payload,
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return (todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
                })
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.payload
                })
            }

        default:
            return state;
    }
}

export default reducer;