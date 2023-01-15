import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function TodoButton({addTodoList}){
  const [text, setText] = useState('')

  const addTodo = () => {
    addTodoList({id:uuidv4(), text, status: 'active'})
    setText('')
  }
  return (
    <>
      <input type='text' name='text' value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
      <button onClick={addTodo}>add</button>
    </>
  )
}