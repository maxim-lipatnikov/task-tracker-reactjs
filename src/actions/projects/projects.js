export const PROJECT_ADD = 'PROJECT_ADD'
export const PROJECT_TASK_ADD = 'PROJECT_TASK_ADD'

export const handleProjectAdd = (name) => ({
    type: PROJECT_ADD,
    name: name
})

export const handleProjectTaskAdd = (projectId, taskId, name, description) => ({
    type: PROJECT_TASK_ADD,
    projectId: projectId,
    taskId: taskId,
    name: name,
    description: description,
    completed: false
})