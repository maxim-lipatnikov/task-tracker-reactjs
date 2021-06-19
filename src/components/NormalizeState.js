// export const projects = [
//     {
//         id: 1, name: 'To do at home', tasks: [
//             { id: 1, name: 'Task Name 1', description: 'Task Description 1', completed: false },
//             { id: 2, name: 'Task Name 2', description: 'Task Description 2', completed: true },
//             { id: 3, name: 'Task Name 3', description: 'Task Description 3', completed: false }
//         ]
//     },
//     {
//         id: 2, name: 'Homeworks', tasks: [
//             { id: 4, name: 'Task Name 4', description: 'Task Description 4', completed: true },
//             { id: 5, name: 'Task Name 5', description: 'Task Description 5', completed: false },
//             { id: 6, name: 'Task Name 6', description: 'Task Description 6', completed: true }
//         ]
//     }
// ]


export default function NormalizeState(projectsArray) { 
    const normalizedProjectsArray = {} // проекты с айдишниками тасок
    const normalizedTasksArray = {} // все таски 
    
    const normilizedState = { 
      projectsById: normalizedProjectsArray,
      tasksById: normalizedTasksArray
    }

    // Получить ID тасок по проекту
    const getTasksIdsByProject = tasks => {
      const projectTasksIds = []
      tasks.map(task => projectTasksIds.push(task.id))
      return projectTasksIds
    }


    projectsArray.map( project => {
      const projectTasks = project.tasks
      projectTasks.map( task => {
        return normalizedTasksArray[task.id] = {
          id: task.id,
          name: task.name,
          description: task.description,
          completed: task.completed
        }
      })
      return normalizedProjectsArray[project.id] = {
        id: project.id,
        name: project.name,
        tasks: getTasksIdsByProject(project.tasks)
      }
    })

    return normilizedState
  };


// const NormalizeState = (projects) => {
//     const normalizeBy = key => {
//         return (data, item) => {
//             data[item[key]] = item
//             return data
//         }
//     }
//     const normalizedTasks = projects
//         .map(project => project.tasks)
//         .flat()
//         .reduce(normalizeBy("id"), {})

//     const normalizedProjects = projects
//         .map(project => ({
//             ...project,
//             tasks: project.tasks.map(task => task.id),
//         }))
//         .reduce(normalizeBy("id"), {})

//     const normalizedState = {
//         projectsById: normalizedProjects,
//         tasksById: normalizedTasks
//     }

//     return normalizedState
// }

// export default NormalizeState