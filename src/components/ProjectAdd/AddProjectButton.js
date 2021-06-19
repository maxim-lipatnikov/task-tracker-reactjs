import styles from './ProjectAdd.module.scss';
import { connect } from "react-redux";
import React from 'react';
import classnames from "classnames/bind";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const AddProjectButtonComponent = ({ theme, handleAddClick }) => {
  return (
      <button className={cx("button", `button-theme-${theme}`)} onClick={handleAddClick}>
        ADD PROJECT
        </button>
  )
}

const AddProjectButton = connect(mapStateToProps)(AddProjectButtonComponent)
export default AddProjectButton