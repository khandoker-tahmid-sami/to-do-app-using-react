import React from 'react'
import style from "./todo.module.css"
const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id, onRemoveTodo} = props

    const handleClick = (id) =>{
        // alert(id)
        onRemoveTodo(id)
    }
  return (
    <article className={style.todo}>
        <div>
            <h3 className={style.h3}>{title}</h3>
            <p className={style.p}>{desc}</p>
        </div>
        <div>
            <button className={style.button} onClick={()=> handleClick(id)}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}

export default Todo