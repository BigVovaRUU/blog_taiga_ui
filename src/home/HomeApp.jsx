import { motion } from 'framer-motion'
import { ArrowRight, Github, Newspaper } from 'lucide-react'
import ThemeToggle from '../shared/ThemeToggle.jsx'

export default function HomeApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-500 shadow" />
            <span className="font-bold text-lg">mini-blog</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-sky-600 transition">Главная</a>
            <a href="/blog/" className="inline-flex items-center gap-1 hover:text-sky-600 transition">
              <Newspaper size={16}/> Блог
            </a>
            <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-1 hover:text-sky-600 transition">
              <Github size={16}/> GitHub
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section 
        className="mx-auto max-w-6xl px-6 py-20 text-center"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500">
          Современный блог на React + Tailwind
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          Лёгкий дизайн, тёмная тема, плавные анимации. Разработка в Docker — продакшн в Nginx.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/blog/" className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-lg font-semibold hover:opacity-90 transition">
            Читать блог <ArrowRight size={18}/>
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition">
            Возможности
          </a>
        </div>
      </motion.section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3 pb-20">
        {[
          {title: "Минимализм", text: "Строгая типографика, современный UI, тёмная тема."},
          {title: "Скорость", text: "Vite + HMR, лёгкая сборка, оптимизированный CSS."},
          {title: "Docker", text: "Dev и Prod окружения в контейнерах."},
        ].map((f, i) => (
          <motion.div 
            key={i}
            className="rounded-2xl p-6 glass hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>© 2025 mini-blog</span>
          <a href="#" className="hover:underline">Наверх ↑</a>
        </div>
      </footer>
    </div>
  )
}