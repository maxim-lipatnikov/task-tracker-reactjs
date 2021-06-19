import styles from './Task.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import { connect } from "react-redux";
import { fetchStatusChange } from '../../actions/projects_tasks'
import CompleteTaskButton from './CompleteTaskButton';

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  tasks: state.data.tasksById
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnStatusChange: (projectId, id, name, description, completed) => dispatch(fetchStatusChange(projectId, id, name, description, completed))
})

const TaskComponent = ({ id, theme, completed, dispatchOnStatusChange, tasks, projectId }) => {
  const task = {
    id: tasks[id].id,
    name: tasks[id].name,
    description: tasks[id].description
  }

  const handleClick = () => {
      return dispatchOnStatusChange(projectId, task.id, task.name, task.description, completed)
  }

  return (
    <div className={cx("task", `task-theme-${theme}`)}>
      <div className={cx("name")}>{task.name}</div>
      <div className={cx("description")}>{task.description}</div>
      <div className={cx("completed")}>Completed: {String(completed)}</div>
      <CompleteTaskButton handleClick={handleClick} />
    </div>
  )
}

const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)
export default Task