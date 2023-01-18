import {FaTrashAlt} from 'react-icons/fa';
import styles from './Todo.module.css'

export default function Todo({todo, deleteTodoList, changeStatus}){
  
  const handleBtn = () =>{
    deleteTodoList(todo.id)
  }
  const handleChecked = () => {
    const status = todo.status === 'active' ? 'complete' : 'active'
    todo.status = status
    changeStatus(todo)
  }
  return (
    <li className={styles.todo}>
      <input className={styles.input} type='checkbox' id={todo.id} checked={todo.status==='complete'} onChange={handleChecked} />
      <label htmlFor={todo.id} className={styles.text}>{todo.text}</label>
      <button className={styles.button} onClick={handleBtn}><FaTrashAlt></FaTrashAlt></button>
    </li>
  )
}