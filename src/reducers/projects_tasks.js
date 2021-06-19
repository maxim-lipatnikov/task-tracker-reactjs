import { PROJECT_ADD, PROJECT_TASK_ADD, CHANGE_STATUS, TASK_ADD, LOAD_PROJECTS } from '../actions/projects_tasks'

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
    default: return state
  }
}

// const initialState = {
//   projects: projectsById,
//   tasks: tasksById
// }

// export const projectsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case PROJECT_ADD: {
//       const projectId = Object.keys(state.projects).length + 1
//       const newProject = {
//         id: projectId,
//         name: action.name,
//         tasks: []
//       }
//       const newProjects = { ...state.projects }
//       newProjects[projectId] = newProject
//       return {
//         ...state,
//         projects: newProjects
//       }
//     }
//     case PROJECT_TASK_ADD: {
//       const projectId = action.projectId
//       const taskId = action.taskId
//       let newProjTasks = { ...state.projects }
//       newProjTasks[projectId].tasks = [...newProjTasks[projectId].tasks, taskId]
//       return {
//         ...state,
//         projects: newProjTasks
//       }
//     }
//     default:
//       return state;
//   }
// }

// export const tasksReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case TASK_ADD: {
//             const taskId = Object.keys(state.tasks).length + 1
//             const newTasks = { ...state.tasks }
//             const newTask = {
//                 id: taskId,
//                 name: action.name,
//                 description: action.description,
//                 completed: false
//             }
//             newTasks[taskId] = newTask
//             return {
//                 ...state,
//                 tasks: newTasks
//             }
//         }
//         case CHANGE_STATUS: {
//             const taskId = action.id
//             const newTasks = { ...state.tasks }
//             newTasks[taskId].completed = !action.completed
//             return {
//                 ...state,
//                 tasks: newTasks
//             }
//         }
//         default:
//             return state;
//     }
// }
