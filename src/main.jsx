import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LM7805 from './LM7805/LM7805.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LM7805 />
  </StrictMode>,
)
