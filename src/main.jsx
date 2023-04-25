import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)
import 'tippy.js/dist/tippy.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
