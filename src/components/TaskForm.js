import React, { Component } from 'react';

export default class TaskForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    let input = event.target.value
    this.setState({ input })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addTask(this.state.input)
    this.setState({ input: ''})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
