// import NormalizeState from '../components/NormalizeState'

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
}
