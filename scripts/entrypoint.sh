#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/workspace/taiga-blog"

if [ ! -f "$APP_DIR/angular.json" ]; then
  echo -e "\n▶ Creating Angular app...\n"
  npx --yes @angular/cli@18 new taiga-blog \
    --standalone \
    --routing \
    --style=scss \
    --skip-git \
    --package-manager=npm \
    --skip-install=false

  cd "$APP_DIR"

  echo -e "\n▶ Adding Taiga UI...\n"
  npx --yes ng add taiga-ui --defaults

  echo -e "\n▶ Installing Taiga extras (kit, layout)...\n"
  npm i @taiga-ui/kit @taiga-ui/layout

  # ⚠️ Гарантируем наличие билдера dev-server (иногда в CI он не ставится)
  echo -e "\n▶ Ensuring Angular dev builder is present...\n"
  npm i -D @angular-devkit/build-angular@^18

  echo -e "\n▶ Generating Posts feature...\n"
  npx --yes ng g c features/posts --standalone --inline-style --inline-template --skip-tests

  echo -e "\n▶ Seeding templates...\n"
  cat /seed/posts.component.ts > "$APP_DIR/src/app/features/posts/posts.component.ts"
  cat /seed/posts.component.html > "$APP_DIR/src/app/features/posts/posts.component.html"
  cat /seed/app.component.html > "$APP_DIR/src/app/app.component.html"

  # Полностью перезаписываем маршруты
  cat > "$APP_DIR/src/app/app.routes.ts" <<'ROUTES'
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'posts', loadComponent: () => import('./features/posts/posts.component').then(m => m.PostsComponent) },
];
ROUTES

  echo -e "\n▶ Final npm install to lock everything...\n"
  npm install
else
  cd "$APP_DIR"
  # На случай, если предыдущий запуск отвалился на установке
  if [ ! -d "node_modules" ]; then
    echo -e "\n▶ node_modules missing, running npm install...\n"
    npm install
  fi

  # Безопасно убедимся, что билдер точно есть
  if ! node -e "require.resolve('@angular-devkit/build-angular/package.json')" >/dev/null 2>&1; then
    echo -e "\n▶ Installing missing @angular-devkit/build-angular...\n"
    npm i -D @angular-devkit/build-angular@^18
  fi
fi

# Запуск dev-сервера извне контейнера
exec npm run start -- --host 0.0.0.0 --port 4200