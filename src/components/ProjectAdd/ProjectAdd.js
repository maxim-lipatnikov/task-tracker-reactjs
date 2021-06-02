import styles from './ProjectAdd.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import Input from '../Input/Input'
import { ThemeContext } from "../App/ThemeContext"

const cx = classnames.bind(styles)

class ProjectAdd extends React.Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget
    this.setState({ [name]: value })
  }

  handleAddClick = () => {
    this.props.addNewProject(this.state.name)
  }

  addProjectButton = () => {
    return (
      <div className={cx("button_container")}>
        <ThemeContext.Consumer>
          {theme => (
        <button className={cx("button", `button-theme-${theme}`)} onClick={this.handleAddClick}>
          ADD PROJECT
          </button>)}
        </ThemeContext.Consumer>
        </div>
    )
  }

  render() {
    return (
      <div className={cx("container")}>
        <Input placeholder='Enter project name' value={this.state.name} onChange={this.handleChange} name="name" />
        <this.addProjectButton />
      </div>
    )
  }
}

export default ProjectAdd;