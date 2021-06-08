import ToDoList from '../ToDoList/ToDoList'
import React from 'react';
import styles from './App.module.scss';
import classnames from 'classnames/bind'
import { BrowserRouter, Link } from "react-router-dom"
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { connect } from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
})

class AppComponent extends React.Component {

  render() {
    return (

      <BrowserRouter>
      <div className={cx("header")}>
        <Link to="/"><span className={cx("logo")}>TaskManager</span></Link>
        <ThemeSwitcher />
        <div className={cx("container", `container-theme-${this.props.theme}`)}>
            <ToDoList />
        </div>
      </div>
      </BrowserRouter>
    )
  }
}
const App = connect(mapStateToProps)(AppComponent)
export default App;