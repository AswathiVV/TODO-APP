import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import List from './components/list.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)
