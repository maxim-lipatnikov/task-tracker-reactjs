import styles from './Task.module.scss';
import React from 'react';
import classnames from "classnames/bind"
// import { ThemeContext } from '../App/ThemeContext';
import { connect } from "react-redux";
import {handleChangeCompletedStatus} from '../../actions/tasks/tasks'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnStatusChange: (id, completed) => dispatch(handleChangeCompletedStatus(id, completed))
})

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
})

const TaskComponent = ({id, theme, name, description, completed, dispatchOnStatusChange, tasksById }) => {
  const task = {
    name: tasksById[id].name,
    description: tasksById[id].description,
    completed: tasksById[id].completed
    }

  return (
    <div className={cx("container")}>
          <div className={cx("task", `task-theme-${theme}`)}>
            <div className={cx("name")}>{name}</div>
            <div className={cx("description")}>{description}</div>
            <div className={cx("completed")}>Completed: {String(completed)}</div>
            <button className={cx("button", `button-theme-${theme}`)} onClick={() => dispatchOnStatusChange(task.id, task.completed)}>DONE</button>
          </div>
      </div>
    )
}

const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)
export default Task