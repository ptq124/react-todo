import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoButton.module.css'
export default function TodoButton({addTodoList}){
  const [text, setText] = useState('')

  const addTodo = () => {
    addTodoList({id:uuidv4(), text, status: 'active'})
    setText('')
  }
  return (
    <div className={styles.layout}>
      <input className={styles.input} type='text' name='text' value={text} placeholder='Add Todo' onChange={(e) => {
        setText(e.target.value)
      }} />
      <button className={styles.button} onClick={addTodo}>add</button>
    </div>
  )
}