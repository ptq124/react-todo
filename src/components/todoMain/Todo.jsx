import {FaTrashAlt} from 'react-icons/fa';
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
    <li>
      <input type='checkbox' id='stauts' checked={todo.status==='complete'} onChange={handleChecked} />
      <label htmlFor='status'>{todo.text}</label>
      <button onClick={handleBtn}><FaTrashAlt></FaTrashAlt></button>
    </li>
  )
}