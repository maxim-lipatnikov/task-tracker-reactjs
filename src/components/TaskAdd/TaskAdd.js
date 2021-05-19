import styles from './TaskAdd.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import TaskInput from '../Input/Input'
import { ThemeContext } from "../App/ThemeContext"

const cx = classnames.bind(styles)

class TaskAdd extends React.Component {
  state = {
    name: '',
    description: ''
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget
    this.setState({ [name]: value })
  }

  handleAddClick = () => {
    this.props.addNewTask(this.state.name, this.state.description)
  }

  addTaskButton = () => {
    return (
      <div className={cx("button_container")}>
        <ThemeContext.Consumer>
          {theme => (
        <button className={cx("button", `button-theme-${theme}`)} onClick={this.handleAddClick}>
          ADD TASK
          </button>)}
        </ThemeContext.Consumer>
        </div>
    )
  }

  render() {
    return (
      <div className={cx("container")}>
        <TaskInput placeholder='Enter task name' value={this.state.name} onChange={this.handleChange} name="name" />
        <TaskInput placeholder='Enter task description' value={this.state.description} onChange={this.handleChange} name="description" />
        <this.addTaskButton />
      </div>
    )
  }
}

export default TaskAdd;