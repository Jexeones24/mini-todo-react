import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import TaskCollection from './components/TaskCollection'

class App extends Component {
  constructor(){
    super();

    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  addTask(task){
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  handleDelete(item){
    debugger;
    this.setState({
      tasks: this.state.tasks.filter((task) => item !== task )
    })
  }

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask}/>
        <TaskCollection tasks={this.state.tasks} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
