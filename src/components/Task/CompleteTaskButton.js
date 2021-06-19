import styles from './Task.module.scss';
import { connect } from "react-redux";
import React from 'react';
import classnames from "classnames/bind";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const CompleteTaskButtonComponent = ({ theme, handleClick }) => {
  return (
    <button className={cx("button", `button-theme-${theme}`)} onClick={handleClick}>DONE</button>
  )
}

const CompleteTaskButton = connect(mapStateToProps)(CompleteTaskButtonComponent)
export default CompleteTaskButton