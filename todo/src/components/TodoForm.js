import React from 'react';

const TodoForm = () => {
    return(
        <div className="todo-form">
            <form>
                <input 
                    type="text" 
                    name="todoHeading" 
                    placeholder="ToDo heading" 
                />
                <input 
                    type="text" 
                    name="todoDescription" 
                    placeholder="ToDo description" 
                />
                <button type="submit">Submit Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;