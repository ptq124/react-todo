import { useState } from 'react';
import { DarkModeProvider } from './components/context/DarkModeContext';
import TodoHeader from './components/todoHead/TodoHeader'
import TodoLists from './components/todoMain/TodoLists'

const filters = ['all', 'active', 'complete']
export default function App() {
  const [filter, setfilter] = useState(filters[0]) 
  const handlefilter = (option) => {
    setfilter(option)
  }
  return (
    <DarkModeProvider>
      <TodoHeader filters={filters} filter={filter} handlefilter={handlefilter}></TodoHeader>
      <TodoLists filter={filter}></TodoLists>
    </DarkModeProvider>
  );
}