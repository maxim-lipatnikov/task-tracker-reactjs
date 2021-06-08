import TaskAdd from '../TaskAdd/TaskAdd'
import TaskList from '../TaskList/TaskList'
import React from 'react';
import { useParams, Redirect} from "react-router-dom"
import styles from './ProjectTasks.module.scss';
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const ProjectTasks = ({projectsById, tasksById, changeCompletedStatus, addNewTask, taskName, taskDescription, handleChange}) => {

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
            <div className={cx("h1")}>Project: {proj_name}</div>
            <div>
                <TaskAdd 
                // ddNewTask={addNewTask} 
                tasksById={proj_tasks}
                projectId={projectId} 
                // taskName={taskName} 
                // taskDescription={taskDescription} 
                // handleChange={handleChange} 
                />
            </div>
            <TaskList
                tasksById={proj_tasks}
                changeCompletedStatus={changeCompletedStatus}
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
// const ProjectTasks = connect(mapStateToProps)(ProjectTasksComponent)
export default ProjectTasks;