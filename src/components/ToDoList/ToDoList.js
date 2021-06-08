import ProjectAdd from '../ProjectAdd/ProjectAdd'
import ProjectList from '../ProjectList/ProjectList'
import ProjectTasks from '../ProjectTasks/ProjectTasks'
import React from 'react';
import styles from './ToDoList.module.scss';
import classnames from 'classnames/bind'
import { Switch, Route, Link, Redirect } from "react-router-dom"
import { connect } from "react-redux";
// import { projects } from  '../NormalizeProjects/NormalizeProjects'
// import { NormalizeProjects } from '../NormalizeProjects/NormalizeProjects'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    projectsById: state.projectsById.projects,
    tasksById: state.tasksById.tasks,
    theme: state.theme.theme,
  })

class ToDoListComponent extends React.Component {

    // changeCompletedStatus = (id) => {
    //     const oldTask = this.state.tasksById[id]
    //     const newTask = { ...oldTask, completed: !oldTask.completed }
    //     this.setState(currentState => ({
    //         tasksById: {
    //             ...currentState.tasksById, [id]: newTask
    //         }
    //     }
    //     ))
    // }

    // addNewProject = (name) => {
    //     const projectId = Object.keys(this.state.projectsById).length + 1
    //     const newProject = {
    //         id: projectId,
    //         name: name,
    //         tasks: []
    //     }
    //     this.setState(currentState => {
    //         const newProjects = { ...currentState.projectsById }
    //         newProjects[projectId] = newProject

    //         return {
    //             projectsById: newProjects
    //         }
    //     })
    // }



    // addNewTask = (event) => {
    //     const { value: projectId } = event.currentTarget
    //     const taskId = Object.keys(tasksById).length + 1
    //     const newTask = {
    //         id: taskId,
    //         name: this.state.taskName,
    //         description: this.state.taskDescription,
    //         completed: false
    //     }
    //     this.setState(currentState => {
    //         const newTasks = { ...currentState.tasksById }
    //         newTasks[taskId] = newTask
    //         const newProjects = { ...currentState.projectsById }
    //         newProjects[projectId] = { ...newProjects[projectId] }
    //         newProjects[projectId].tasks = [...newProjects[projectId].tasks, taskId]
    //         return {
    //             tasksById: newTasks,
    //             projectsById: newProjects
    //         }
    //     })

    // }

    render() {
        return (
            <div className={cx("container")}>
                <Switch>
                    <Route path="/">
                    <div className={cx("project_container")}>
                        <Link to="/projects"><div className={cx("h1")}>Projects</div></Link>
                        <Route path="/projects">
                                <ProjectAdd />
                                <ProjectList projectsById={this.props.projectsById} />
                        </Route>
                        </div>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/projects/:projectId/'>
                        <div className={cx("tasks_container")}>
                        <ProjectTasks 
                            projectsById={this.props.projectsById}
                            tasksById={this.props.tasksById}
                            // changeCompletedStatus={this.changeCompletedStatus}
                            // addNewTask={this.addNewTask}
                            // taskName={this.state.taskName}
                            // taskDescription={this.state.taskDescription}
                            // handleChange={this.handleChange}
                        />
                        </div>
                    </Route>
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}

const ToDoList = connect(mapStateToProps)(ToDoListComponent)
export default ToDoList;