import { LOAD_PROJECTS, LOAD_TASKS } from '../actions/projects_tasks'

const initialState = []

export const projectsTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS: {
      return {
        ...state,
        projectsById: action.projects,
        tasksById: action.tasks
      }
    }
    case LOAD_TASKS: {
      return {
        ...state,
        projectTasks: action.tasks
      }
    }
    default: return state
  }
}