import styles from './TaskAdd.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import Input from '../Input/Input'
import { ThemeContext } from "../App/ThemeContext"

const cx = classnames.bind(styles)

const TaskAdd = ({addNewTask, taskName, taskDescription, projectId, handleChange}) => {
  return (
    <div className={cx("container")}>
      <Input placeholder='Enter task name' value={taskName} onChange={handleChange} name="taskName" />
      <Input placeholder='Enter task description' value={taskDescription} onChange={handleChange} name="taskDescription" />
      <AddTaskButton projectId={projectId} addNewTask={addNewTask} />
    </div>
  )
}

const AddTaskButton = ({projectId, addNewTask}) => {
  return (
    <div className={cx("button_container")}>
      <ThemeContext.Consumer>
        {theme => (
      <button value={projectId} className={cx("button", `button-theme-${theme}`)} onClick={addNewTask}>
        ADD TASK
        </button>)}
      </ThemeContext.Consumer>
      </div>
  )
}

export default TaskAdd;