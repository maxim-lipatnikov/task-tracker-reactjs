import NormalizeState from '../components/NormalizeState'

export default class ApiService {
  BASE_URL = 'http://valerystatinov.com/api'

  request = (url, method, body) => {
    return fetch(`${this.BASE_URL}${url}`, {
      method,
      headers: {
        Token: 'MaxLipatnikov',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  get(url) {
    return this.request(url, 'GET')
  }
  post(url, body) {
    return this.request(url, 'POST', body)
  }
  put(url, body) {
    return this.request(url, 'PUT', body)
  }

  loadProjects = (url = '/projects/') => {
    return this.get(url).then(res => {

      const projects = []
      Object.values(res).map((project) => {
        return projects.push({
          id: project.id,
          name: project.name,
          tasksCount: project.tasksCount
        })
      })

      let tasksOnUploading = projects.map(project => this.loadTasks(project.id))

      const normalizedState = Promise.all(tasksOnUploading).then(responses => {
        Object.entries(responses).map((res, id) => {
          return projects[id].tasks = res[1]
        })
        return NormalizeState(projects)
      })

      return normalizedState
    })
      .catch(err => new Error('ApiService.loadProjects(): an error occured:\n', err))
  }

  loadTasks = (projectId, url = '/projects') => {
    return this.get(`${url}/${projectId}/tasks/`)
      .then(res => res)
  }

  uploadNewProject = (name, url='/projects/') => {
    const project = {
      name: name
    }
    return this.post(url, project)
  }
 
  uploadNewTask = (projectId, name, description, url='/projects') => {
    const task = {
      'name': name,
      'description': description,
      'completed': false
    }
    return this.post(`${url}/${projectId}/tasks/`, task)
  }
}