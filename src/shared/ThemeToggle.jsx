import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {}
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme) {
  const root = document.documentElement
  if (theme === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
  try { localStorage.setItem('theme', theme) } catch {}
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // синхронизация между вкладками (не обязательно, но приятно)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return (
    <button
      onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm
                 border-slate-200 hover:bg-slate-50 transition
                 dark:border-slate-700 dark:hover:bg-slate-800"
      aria-label="Переключить тему"
      title="Переключить тему"
    >
      {theme === 'dark' ? <Moon size={16}/> : <Sun size={16}/>}
      {theme === 'dark' ? 'Тёмная' : 'Светлая'}
    </button>
  )
}