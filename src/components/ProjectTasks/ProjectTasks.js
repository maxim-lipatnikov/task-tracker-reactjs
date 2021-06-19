import TaskAdd from '../TaskAdd/TaskAdd'
import TaskList from '../TaskList/TaskList'
import React from 'react';
import { useParams, Redirect } from "react-router-dom"
import styles from './ProjectTasks.module.scss';
import classnames from 'classnames/bind';
import { connect } from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const ProjectTasksComponents = ({ projectsById, tasksById, theme }) => {

    const normalizeBy = key => {
        return (data, item) => {
            data[item[key]] = item
            return data
        }
    }

    const { projectId } = useParams()

    if (projectId in projectsById) {
        const project = projectsById[projectId]
        const proj_name = project.name
        const { tasks } = project
        const proj_tasks = (tasks.map(taskId => tasksById[taskId])).reduce(normalizeBy("id"), {})

        console.log(proj_tasks)
        return (
            <div className={cx("container")}>
                <div className={cx("title", `title-theme-${theme}`)}>Project: {proj_name}</div>
                <div>
                    <TaskAdd
                        tasksById={tasksById}
                        projectId={projectId}
                    />
                </div>
                <TaskList
                    tasksById={proj_tasks}
                />
            </div>
        )
    }
    else {
        return (
            <Redirect to='/' />
        )
    }
}
const ProjectTasks = connect(mapStateToProps)(ProjectTasksComponents)
export default ProjectTasks;