# Минимальный дев-контейнер для Vite + React + Tailwind
FROM node:20-alpine
WORKDIR /app

# Устанавливаем зависимости отдельно, чтобы кешировалось
COPY package.json .
RUN npm install --no-audit --no-fund

# Копируем остальной код
COPY . .

EXPOSE 5173
# Запуск Vite dev-сервера, доступного снаружи контейнера
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]