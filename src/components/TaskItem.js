import React from 'react';

const TaskItem = (props) => {
  const deleteItem = () => props.handleDelete(props.task)

  return (
    <div>
      <li>{props.task} <input type="button" value="x" onClick={deleteItem}/></li>
    </div>
  )
}




export default TaskItem
