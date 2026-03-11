import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Yahan Router NAHI hona chahiye agar App.jsx mein hai */}
    <App />
  </StrictMode>,
)