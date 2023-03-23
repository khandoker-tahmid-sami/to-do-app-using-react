import React, {useState} from 'react'
import Todos from './todos'
import NewTodo from './newTodo'
import {v4 as uuidv4} from "uuid"
import style from "./home.module.css"

// const dummyTodos = [
//     {
//         id: 1,
//         title : "todo title 1",
//         description : "todo description 1"
//     },
//     {
//         id: 2,
//         title : "todo title 2",
//         description : "todo description 2"
//     }
// ]

const Home =() => {
    const [todos, setTodos] = useState([])

    const handleAddTodo = (todo) =>{
        // console.log(todo)
        setTodos((prevTodos) =>{
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }
    const handleRemoveTodo = (id) =>{
        // alert(id)
        
        setTodos((prevTodos) =>{
            const filterdTodos = prevTodos.filter(todo => todo.id != id )
            return filterdTodos
        })
    }
  return (
    <div className={style.container}>
        <h1 className={style.h1}>TODO APP</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home