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


const NormalizeState = (data) => { 
    const normalizedProjects = {}
    const normalizedTasks = {}
    
    const normilizedState = { 
      projectsById: normalizedProjects,
      tasksById: normalizedTasks
    }

    const getTasksFromProj = (tasks) => {
      const projectTasks = []
      tasks.map(task => projectTasks.push(task.id))
      return projectTasks
    }


    data.map( project => {
      const projectTasks = project.tasks
      projectTasks.map( task => {
        return normalizedTasks[task.id] = {
          id: task.id,
          name: task.name,
          description: task.description,
          completed: task.completed
        }
      })
      return normalizedProjects[project.id] = {
        id: project.id,
        name: project.name,
        tasks: getTasksFromProj(project.tasks)
      }
    })

    return normilizedState
  }

export default NormalizeState