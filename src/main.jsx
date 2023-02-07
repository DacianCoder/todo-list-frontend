import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import pitechLogo from './assets/img.png'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <img src={pitechLogo} className="pitechLogo"/>
    <App />
  </React.StrictMode>,
)
