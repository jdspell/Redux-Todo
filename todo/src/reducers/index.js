
import { ADD_TODO } from '../actions';

const initialState = { 
    todos: [
        {heading: "taskOne", description: "this is the first task", id: Date.now()}
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

        default: 
            return state;
    }
}

export default reducer;