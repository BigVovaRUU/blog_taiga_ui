import { createRoot } from 'react-dom/client'
import HomeApp from './HomeApp.jsx'
import '../index.css'

const el = document.getElementById('root-home')
createRoot(el).render(<HomeApp />)