import ToDoList from '../ToDoList/ToDoList'
import React from 'react';
import styles from './App.module.scss';
import classnames from 'classnames/bind'
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"
import { BrowserRouter, Link } from "react-router-dom"

const cx = classnames.bind(styles)

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME,
  }

  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
  }

  render() {
    return (
      <BrowserRouter>
      <div className={cx("header")}>
        <Link to="/"><span className={cx("logo")}>TaskManager</span></Link>
        <div className={cx("radios")}>
          <div>
            <input
              type="radio"
              name="theme"
              id="light"
              value="light"
              checked={this.state.theme === "light"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="light">Light</label>
          </div>

          <div>
            <input
              type="radio"
              name="theme"
              id="dark"
              value="dark"
              checked={this.state.theme === "dark"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="dark">Dark</label>
          </div>
        </div>
        <div className={cx("container", `container-theme-${this.state.theme}`)}>
          <ThemeContext.Provider value={this.state.theme}>
            <ToDoList />
          </ThemeContext.Provider>
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;