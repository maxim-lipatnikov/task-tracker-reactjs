import React from 'react';
import classnames from 'classnames/bind'
import styles from './ThemeSwitcher.module.scss';
import { connect } from "react-redux";
import { handleThemeChange } from "../../actions/theme";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})

const ThemeSwitcherComponent = ({dispatchOnThemeChange, theme}) => {
  const onThemeChange = (e) => {
    dispatchOnThemeChange(e.target.value)
  }  
  return(
        <div className={cx("radios")}>
          <div>
            <input
              type="radio"
              name="theme"
              id="light"
              value="light"
              checked={theme === "light"}
              onChange={onThemeChange}
            />
            <label htmlFor="light">Light</label>
          </div>
          <div>
            <input
              type="radio"
              name="theme"
              id="dark"
              value="dark"
              checked={theme === "dark"}
              onChange={onThemeChange}
            />
            <label htmlFor="dark">Dark</label>
          </div>
        </div>
    )
}

export const ThemeSwitcher = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcherComponent)