import React from 'react'
import ToDoItem from './ToDoItem'



const ToDoList = (props) => {
  const activityArr=props.activityArr
  const setActivityArr=props.setActivityArr
    
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
    <h1  className="text-2xl font-medium">
     Today's Activities	   
    </h1>
   {activityArr.length===0? <p>You havent added any activity yet</p>:""}
    {
        activityArr.map(function(item,id){
          return <ToDoItem id={item.id} activity={item.activity} activityArr={activityArr} setActivityArr={setActivityArr}/>
        })
    }

</div>
  )
}

export default ToDoList