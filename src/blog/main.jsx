import { createRoot } from 'react-dom/client'
import BlogApp from './BlogApp.jsx'
import '../index.css'

const el = document.getElementById('root-blog')
createRoot(el).render(<BlogApp />)