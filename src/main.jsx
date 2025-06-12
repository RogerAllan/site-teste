import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CasinoCourse from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CasinoCourse />
  </StrictMode>,
)
