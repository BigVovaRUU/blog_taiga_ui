import { motion } from 'framer-motion'
import { Home, Newspaper, CalendarDays, Tag } from 'lucide-react'
import { useMemo } from 'react'
import ThemeToggle from '../shared/ThemeToggle.jsx'

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs
                     border-slate-200 bg-slate-50 text-slate-700
                     dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
      {children}
    </span>
  )
}

function PostCard({ post }) {
  return (
    <motion.article 
      className="rounded-2xl border p-5 hover:shadow-md transition bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <CalendarDays size={14}/> {post.date}
        </div>
        <div className="flex gap-2">
          {post.tags?.map(t => <Chip key={t}><Tag size={12} className="mr-1"/>{t}</Chip>)}
        </div>
      </div>
      <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
      <a href="#" className="mt-3 inline-block text-sm text-sky-700 hover:underline dark:text-sky-300">Читать →</a>
    </motion.article>
  )
}

export default function BlogApp() {
  const posts = useMemo(() => ([
    { id: 1, title: 'Dockerized Vite + React', excerpt: 'Dev/Prod окружения в контейнерах.', date: '2025-09-13', tags: ['docker','vite'] },
    { id: 2, title: 'Tailwind по уму', excerpt: 'Чистый прод-CSS и контроль классов.', date: '2025-09-12', tags: ['tailwind'] },
    { id: 3, title: 'Минимализм в UI', excerpt: 'Принципы современного минималистичного дизайна.', date: '2025-09-11', tags: ['ui','design'] },
  ]), [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-500 shadow" />
            <span className="font-bold text-lg">mini-blog</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/" className="inline-flex items-center gap-1 hover:text-sky-600 transition">
              <Home size={16}/> Главная
            </a>
            <span className="inline-flex items-center gap-1 text-slate-900 dark:text-white">
              <Newspaper size={16}/> Блог
            </span>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">Блог</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Последние записи и заметки.</p>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map(p => <PostCard key={p.id} post={p}/>)}
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>© 2025 mini-blog</span>
          <a href="#" className="hover:underline">Наверх ↑</a>
        </div>
      </footer>
    </div>
  )
}