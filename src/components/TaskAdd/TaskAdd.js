import styles from './TaskAdd.module.css';
import React from 'react';

const TaskInput = (props) => {
  return (
    <div>
      <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} name={props.name} className={styles.input} />
    </div>
  )
}

class TaskAdd extends React.Component {
  state = {
    name: '',
    description: ''
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget
    this.setState({ [name]: value })
  }

  handleAddClick = (props) => {
    this.props.addNewTask(this.state.name, this.state.description)
  }

  addTaskButton = () => {
    return (
      <div>
        <button className={styles.button} onClick={this.handleAddClick}>ADD TASK</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <TaskInput placeholder='Enter task name' value={this.state.name} onChange={this.handleChange} name="name" />
        <TaskInput placeholder='Enter task description' value={this.state.description} onChange={this.handleChange} name="description" />
        <this.addTaskButton />
      </div>
    )
  }
}

export default TaskAdd;