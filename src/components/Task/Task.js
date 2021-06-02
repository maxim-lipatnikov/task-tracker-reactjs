import styles from './Task.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import { ThemeContext } from '../App/ThemeContext';

const cx = classnames.bind(styles)

const Task = (props) => {

  return (
    <div className={cx("container")}>
      <ThemeContext.Consumer>
        {theme => (
          <div className={cx("task", `task-theme-${theme}`)}>
            <div className={cx("name")}>{props.name}</div>
            <div className={cx("description")}>{props.description}</div>
            <div className={cx("completed")}>Completed: {String(props.completed)}</div>
            <button className={cx("button", `button-theme-${theme}`)} onClick={props.onClick}>DONE</button>
          </div>
        )}
      </ThemeContext.Consumer>
      </div>
    )
}

export default Task;