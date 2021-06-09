import styles from './TaskAdd.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import Input from '../Input/Input'
import AddTaskButton from './AddTaskButton'
import { connect } from "react-redux";
import { handleTaskAdd } from '../../actions/tasks/tasks'
import { handleProjectTaskAdd } from '../../actions/projects/projects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnTaskAdd: (name, description, projectId) => dispatch(handleTaskAdd(name, description, projectId)),
  dispatchOnProjectTaskAdd: (taskId, projectId) => dispatch(handleProjectTaskAdd(taskId, projectId))
})

class TaskAddComponent extends React.Component {
  state = {
    name: '',
    description: ''
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget
    this.setState({ [name]: value })
  }

  handleAddClick = () => {
    const projectId = this.props.projectId
    const taskId = Object.keys(this.props.tasksById).length + 1
    console.log(projectId)
    return [
      this.props.dispatchOnTaskAdd(projectId, this.state.name, this.state.description),
      this.props.dispatchOnProjectTaskAdd(taskId, projectId)
    ]
  }

  render() {
    return (
      <div className={cx("container")}>
        <Input placeholder='Enter task name' value={this.state.name} onChange={this.handleChange} name="name" />
        <Input placeholder='Enter task description' value={this.state.description} onChange={this.handleChange} name="description" />
        <AddTaskButton projectId={this.props.projectId} handleAddClick={this.handleAddClick} />
      </div>

    )
  }
}

const TaskAdd = connect(null, mapDispatchToProps)(TaskAddComponent)
export default TaskAdd;