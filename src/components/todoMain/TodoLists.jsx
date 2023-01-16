import {useState} from 'react'
import Todo from './Todo'
import TodoButton from './TodoButton'
export default function TodoLists({filter}){
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: '손씻기',
      status: 'active',
    },
    {
      id: 2,
      text: '양치하기',
      status: 'active',
    },
    {
      id: 3,
      text: '잠 자기',
      status: 'active',
    },
  ])
  const addTodoList = (value) =>{
    setTodoList([...todoList, value])
  }
  const deleteTodoList = (id) =>{
    setTodoList(todoList.filter(d=> d.id !== id))
  }
  const changeStatus = (todo) => {
    setTodoList(todoList.map(d => d.id === todo.id ? todo : d ))
  }
  const filtered = getfilter(todoList, filter)
  return (
    <section>
      <ul>
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