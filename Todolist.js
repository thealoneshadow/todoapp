import React from 'react'
import Todo from './Todo'

function Todolist({todos, setTodos, filteredTodos}) {
console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map((todo)=>(
                <Todo text={todo.text} todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
            ))}
            
            </ul>
        </div>
    )
}

export default Todolist
