import styles from './Input.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import { connect } from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const InputComponent = ({placeholder, value, onChange, name, theme}) => {
  return (
        <input
          className={cx("input", `input-theme-${theme}`)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name} />
  )
}

const Input = connect(mapStateToProps)(InputComponent)
export default Input;