import ApiService from '../components/Api'
export const PROJECT_ADD = 'PROJECT_ADD'
export const PROJECT_TASK_ADD = 'PROJECT_TASK_ADD'
export const TASK_ADD = 'TASK_ADD'
export const TASKADD_CLICK = 'TASKADD_CLICK'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const LOAD_PROJECTS = 'LOAD_PROJECTS'


export const fetchDataLoaded = () => (dispatch) => {
    const api = new ApiService()
    api.loadProjects().then( response => {
        const { projectsById, tasksById } = response
        dispatch({
            type: LOAD_PROJECTS,
            projects: projectsById,
            tasks: tasksById
        })
    })
}

export const handleProjectAdd = (name) => ({
    type: PROJECT_ADD,
    name: name
})

export const handleProjectTaskAdd = (taskId, projectId) => ({
    type: PROJECT_TASK_ADD,
    projectId: projectId,
    taskId: taskId
})

export const handleTaskAdd = (name, description, projectId) => ({ // action creator
    type: TASK_ADD,
    projectId: projectId,
    name: name,
    description: description
})

export const handleChangeCompletedStatus = (id, completed) => ({ // action creator
    type: CHANGE_STATUS,
    id: id,
    completed: completed
})