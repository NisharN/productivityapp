import React from 'react'
import { useState } from 'react'

const AddToDo = (props) => {
  const activityArr=props.activityArr
  const setActivityArr=props.setActivityArr
  const [newActivity,setNewActivity]=useState('') 
  function handleChange(e){
    setNewActivity(e.target.value)

  }
  function handleClick(){
    var tempArr=[...activityArr]
    tempArr.push({
      id:activityArr.length+1,
      activity:newActivity
    })
    setActivityArr(tempArr)
    setNewActivity('')
  }

  return (
    <div className='flex flex-col gap-3'>
    <h1 className="text-2xl font-medium">Manage Activities</h1>
    <input type="text" value={newActivity} onChange={handleChange} className="border border-black bg-transparent p-1" placeholder="what your next plan?"/>
    <button onClick={handleClick}className="bg-black text-white p-1 border border-black">Add</button>
</div>
  )
}

export default AddToDo