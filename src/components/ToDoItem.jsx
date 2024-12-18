function ToDoItem(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    function handleDelete(id){
        var tempArr=activityArr.filter(function(item){
            return item.id!==id
        })
        setActivityArr(tempArr)

    }

    return(
    <div className="flex justify-between">
    <p>{props.id}.{props.activity}</p>
    <button className="bg-red-500 p-1 mb-1 border border-red-500 rounded-md hover:bg-black hover:text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
)
}
export default ToDoItem