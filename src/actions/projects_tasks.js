import ApiService from '../components/Api'
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

export const fetchProjectUpload = (name) => (dispatch) => {
    const api = new ApiService()
    api.uploadNewProject(name)
    .then(() => dispatch(fetchDataLoaded()))
}

export const fetchTaskUpload = (projectId, name, description) => (dispatch) => {
    const api = new ApiService()
    api.uploadNewTask(projectId, name, description)
    .then(() => dispatch(fetchDataLoaded()))
}


export const handleChangeCompletedStatus = (id, completed) => ({ // action creator
    type: CHANGE_STATUS,
    id: id,
    completed: completed
})