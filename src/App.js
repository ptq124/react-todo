import { useState } from 'react';
import TodoHeader from './components/todoHead/TodoHeader'
import TodoLists from './components/todoMain/TodoLists'

const filters = ['all', 'active', 'complete']
export default function App() {
  const [filter, setfilter] = useState(filters[0]) 
  const handlefilter = (option) => {
    setfilter(option)
  }
  return (
    <>
      <TodoHeader filters={filters} handlefilter={handlefilter}></TodoHeader>
      <TodoLists filter={filter}></TodoLists>
    </>
  );
}