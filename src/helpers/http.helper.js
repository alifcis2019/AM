// http client helper
import axios from 'axios'

const lang = localStorage.getItem('ng-locale') || 'ar'
const URL = import.meta.env.VITE_BASE_API_URL
const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Accept-Language': lang,
  },
})

axiosClient.interceptors.request.use((config) => {
  const token = window.$cookies.get('ng-token') || {}
  config.headers.Authorization = `Bearer ${token}`
  return config
})

// if 401 remove cookie and redirect to login
axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosClient
