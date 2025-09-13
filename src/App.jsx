export default function App() {
  const posts = [
    { id: 1, title: 'Первый пост', excerpt: 'React + Tailwind + Docker', date: '2025-09-13' },
    { id: 2, title: 'Tailwind без CDN', excerpt: 'Подключили через PostCSS внутри Vite', date: '2025-09-12' }
  ]

  return (
    <main className="min-h-screen max-w-3xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Мой мини-блог</h1>
        <p className="text-gray-600">React + Tailwind + Docker</p>
      </header>

      <section className="space-y-4">
        {posts.map(p => (
          <article key={p.id} className="bg-white rounded-2xl shadow p-5 hover:shadow-md transition">
            <div className="text-sm text-gray-500">{p.date}</div>
            <h2 className="text-xl font-semibold mt-1">{p.title}</h2>
            <p className="text-gray-700 mt-2">{p.excerpt}</p>
            <a href="#" className="inline-block mt-3 text-blue-600 hover:underline">Читать →</a>
          </article>
        ))}
      </section>

      <footer className="mt-10 text-center text-xs text-gray-500">© 2025</footer>
    </main>
  )
}