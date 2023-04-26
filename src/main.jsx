import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import './index.css'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)
import 'tippy.js/dist/tippy.css'
import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.baseURL =
  import.meta.env.VITE_APP_API_URL || 'http://localhost:8000/api'

// Request interceptor for API calls
axios.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('token')
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
