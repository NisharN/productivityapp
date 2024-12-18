import React from 'react'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import { useState } from 'react'

const Container = () => {
  const [activityArr, setActivityArr] = useState([])
  return (
    <div>
        <div className='flex gap-5 flex-wrap'>
        <AddToDo activityArr={activityArr} setActivityArr={setActivityArr}/>
        <ToDoList activityArr={activityArr} setActivityArr={setActivityArr} />

  
    </div>
  </div>
  )
}

export default Container