import {useEffect, useState} from 'react'
import Todo from './Todo'
import TodoButton from './TodoButton'
import styles from './TodoLists.module.css'

export default function TodoLists({filter}){
  const [todoList, setTodoList] = useState(readTodo)
  const addTodoList = (value) =>{
    setTodoList([...todoList, value])
  }
  const deleteTodoList = (id) =>{
    setTodoList(todoList.filter(d=> d.id !== id))
  }
  const changeStatus = (todo) => {
    setTodoList(todoList.map(d => d.id === todo.id ? todo : d ))
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify
    (todoList))
  },[todoList])

  const filtered = getfilter(todoList, filter)
  return (
    <section className={styles.layout}>
      <ul className={styles.list}>
        {filtered.map((d, index)=>(
          <Todo key={index} todo={d} deleteTodoList={deleteTodoList} changeStatus={changeStatus}></Todo>
        ))}
      </ul> 
      <TodoButton addTodoList={addTodoList}></TodoButton>
    </section>
  )
}

function getfilter(todoList, status){
  if(status === 'all'){
    return todoList
  }
  return todoList.filter(d => d.status === status)
}
function readTodo(){
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : []
}