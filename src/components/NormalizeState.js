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