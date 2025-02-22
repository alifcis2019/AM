import axiosClient from './http.helper'

class ApiClient {
  constructor(resource, options = {}) {
    this.options = options
    this.resource = resource
  }

  get url() {
    return `${import.meta.env.VITE_BASE_API_URL}/${this.resource}`
  }

  get(params = {}) {
    return axiosClient.get(this.url, { params })
  }

  show(id, params = {}) {
    return axiosClient.get(`${this.url}/${id}`, { params })
  }

  create(data) {
    return axiosClient.post(`${this.url}`, data)
  }

  update(id, data) {
    return axiosClient.patch(`${this.url}/${id}`, data)
  }

  delete(id) {
    return axiosClient.delete(`${this.url}/${id}`)
  }
}

export default ApiClient
