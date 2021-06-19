import styles from './ProjectAdd.module.scss';
import React from 'react';
import classnames from "classnames/bind"
import Input from '../Input/Input'
import AddProjectButton from './AddProjectButton'
import { connect } from "react-redux";
import { fetchProjectUpload } from '../../actions/projects_tasks';

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnProjectAdd: (name) => dispatch(fetchProjectUpload(name))
})

class ProjectAddComponent extends React.Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget
    this.setState({ [name]: value })
  }

  handleAddClick = () => {
    return this.props.dispatchOnProjectAdd(this.state.name)
  }

  render() {
    return (
      <div className={cx("container")}>
        <Input placeholder='Enter project name' value={this.state.name} onChange={this.handleChange} name="name" />
        <AddProjectButton theme={this.props.theme} handleAddClick={this.handleAddClick} />
      </div>
    )
  }
}

const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent)
export default ProjectAdd;