import ApiService from '../components/Api'
export const LOAD_PROJECTS = 'LOAD_PROJECTS'
export const LOAD_TASKS = 'LOAD_TASKS'


export const fetchDataLoad = () => (dispatch) => {
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

export const fetchTasksLoad = (projectId) => (dispatch) => {
    const api = new ApiService()
    api.loadTasks(projectId).then( response => {
        const tasks = response
        dispatch({
            type: LOAD_TASKS,
            tasks: tasks
        })
    })
}

export const fetchProjectUpload = (name) => (dispatch) => {
    const api = new ApiService()
    api.uploadNewProject(name)
    .then(() => dispatch(fetchDataLoad()))
}

export const fetchTaskUpload = (projectId, name, description) => (dispatch) => {
    const api = new ApiService()
    api.uploadNewTask(projectId, name, description)
    .then(() => dispatch(fetchDataLoad()))
}

export const fetchStatusChange = (projectId, id, name, description, completed) => (dispatch) => {
    const api = new ApiService()
    api.changeStatus(projectId, id, name, description, completed)
    .then(() => dispatch(fetchTasksLoad(projectId)))
}
