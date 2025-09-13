# Blog - тестовая сборка

**React + Tailwind + Docker Blog**

Минимальный блог на React + Tailwind, упакованный в Docker.
Поддерживаются два режима:
 - Dev: hot-reload через Vite (порт 5173)
 - Prod: готовая сборка на Nginx (порт 8080)

---

📂 Структура проекта
```bash
.
├── src/                # Код приложения
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html          # Точка входа
├── package.json        # npm-скрипты и зависимости
├── vite.config.js      # Конфиг Vite
├── tailwind.config.js  # Конфиг Tailwind
├── Dockerfile.dev      # Dev-сборка (Vite HMR)
├── Dockerfile.prod     # Prod-сборка (Nginx)
├── Dockerfile          # Универсальный multi-stage (опционально)
├── .dockerignore       # Исключения для контекста сборки
└── README.md
```

---

🔧 Подготовка

Убедись, что у тебя установлен Docker и он запущен.

---

🚀 Запуск (Dev Mode)

Собрать образ:
```bash
docker build -f Dockerfile.dev -t react-tailwind-blog:dev .
```
Запустить контейнер:
```bash
docker run --rm -it -p 5173:5173 react-tailwind-blog:dev
```
Открыть в браузере:
👉 http://localhost:5173

Остановка
```bash
Просто CTRL+C в терминале, так как контейнер запущен в интерактивном режиме.
```
---

📦 Запуск (Prod Mode)

Собрать образ:
```bash
docker build -f Dockerfile.prod -t react-tailwind-blog:prod .
```
Запустить контейнер:
```bash
docker run --rm -it -p 8080:80 react-tailwind-blog:prod
```
Открыть в браузере:
👉 http://localhost:8080

Остановка
```bash
Также CTRL+C в терминале.
```
Если нужно запустить в фоне:
```bash
docker run -d -p 8080:80 --name blog_prod react-tailwind-blog:prod
```
Остановить и удалить:
```bash
docker stop blog_prod
```

---

🛠 Полезные команды

Посмотреть запущенные контейнеры:
```bash
docker ps
```
Удалить висячие образы/кэши:
```bash
docker system prune -af
```

---

🔮 TODO
 - Добавить docker-compose для dev/prod
 - Прокинуть API backend в отдельный контейнер
 - Сделать volume для node_modules (ускорение разработки)