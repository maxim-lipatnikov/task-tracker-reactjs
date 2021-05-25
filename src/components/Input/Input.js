import styles from './Input.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import { ThemeContext } from "../App/ThemeContext"

const cx = classnames.bind(styles)

const TaskInput = (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <input
          className={cx("input", `input-theme-${theme}`)}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name} />
      )}
    </ThemeContext.Consumer>
  )
}

export default TaskInput;