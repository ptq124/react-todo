export default function Todo({todoList}){
  return (
    <ul>
      {todoList.map((d)=>(
        <li key={d.id}>{d.text}</li>
      ))}
    </ul> 
  )
}