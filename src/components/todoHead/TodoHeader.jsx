import React from 'react'

export default function TodoHeader({filters, handlefilter}){
  return (
    <header>
      {filters.map((d, index)=>(
        <button key={index} onClick={()=>handlefilter(d)}>{d}</button>
      ))}
    </header>
  )
}
