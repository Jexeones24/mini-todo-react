import React, { Component } from 'react';
import TaskItem from './TaskItem'

export default class TaskCollection extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        {this.props.tasks.map((task, i) => <TaskItem key={i} task={task} handleDelete={this.props.handleDelete}/>)}
      </div>
    )
  }
}
