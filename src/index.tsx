import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import WallProvider from './context/WallProvider'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WallProvider>
        <App />
      </WallProvider>
    </BrowserRouter>
  </React.StrictMode>
)
