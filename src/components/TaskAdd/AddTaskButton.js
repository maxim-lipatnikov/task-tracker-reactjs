import styles from './TaskAdd.module.scss';
import { connect } from "react-redux";
import React from 'react';
import classnames from "classnames/bind";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
  })

const AddTaskButtonComponent = ({ projectId, handleAddClick, theme }) => {
    return (
      <div className={cx("button_container")}>
        <button value={projectId} className={cx("button", `button-theme-${theme}`)} onClick={handleAddClick}>
          ADD TASK
            </button>
      </div>
    )
  }

const AddTaskButton = connect(mapStateToProps)(AddTaskButtonComponent)
export default AddTaskButton