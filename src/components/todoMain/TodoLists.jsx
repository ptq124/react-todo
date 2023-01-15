import {useState} from 'react'
import Todo from './Todo'
import TodoButton from './TodoButton'
export default function TodoLists(){
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
  return (
    <section>
      <Todo todoList={todoList}></Todo>
      <TodoButton addTodoList={addTodoList}></TodoButton>
    </section>
  )
}
