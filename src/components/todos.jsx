import React from 'react'
import Todo from './todo'
import style from "./todos.module.css"
const Todos = ({todos,onRemoveTodo}) => {
  return (
    <div className={style.todos}>
        {
            todos.map(todo => <Todo id={todo.id} key={todo.id} todo={todo.todo} onRemoveTodo={onRemoveTodo}/>)
        }
    </div>
  )
}

export default Todos
