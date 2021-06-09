import { CHANGE_STATUS, TASK_ADD } from '../actions/tasks/tasks'
import { projects } from '../components/NormalizeProjects/NormalizeProjects'
import { NormalizeProjects } from '../components/NormalizeProjects/NormalizeProjects'

const { projectsById, tasksById } = NormalizeProjects(projects)

const initialState = {
    projects: projectsById,
    tasks: tasksById
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD: {
            // const {taskId, name, description} = action
            // const newTasksList = {...state.tasks}
            // newTasksList[taskId] = {
            //   id: taskId,
            //   name: name,
            //   description: description,
            //   completed: false
            // }
            // return { 
            //   ...state, 
            //   tasks: newTasksList
            // }

            // const projectId = action.projectId
            const taskId = Object.keys(state.tasks).length + 1
            const newTasks = { ...state.tasks }
            const newTask = {
                id: taskId,
                name: action.name,
                description: action.description,
                completed: false
            }
            newTasks[taskId] = newTask
            return {
                ...state,
                tasks: newTasks
            }
        }
        case CHANGE_STATUS: {
            const taskId = action.id
            const newTasks = { ...state.tasks }
            newTasks[taskId].completed = !action.completed
            return {
                ...state,
                tasks: newTasks
            }
        }
        default:
            return state;
    }
}

    //   addNewTask = (event) => {
    //     const { value: projectId } = event.currentTarget

    //     this.setState(currentState => {

    //     })