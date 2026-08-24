# Портфолио Валентины Отт

Одностраничный сайт: AI & Vibe Coding Developer.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес, который покажет Vite — обычно `http://localhost:5173`.

## Production-сборка

```bash
npm run build
npm run preview
```

Папка `dist` готова для публикации на GitHub Pages. В `vite.config.ts` уже стоит `base: './'`, чтобы сайт открывался и из подпапки.

## Где менять ссылки

Все ссылки живут в одном файле: `src/config.ts`.

- Telegram → `siteLinks.telegram`
- Email → `siteLinks.email`
- LUMI → `siteLinks.projects.lumi`
- «Что приготовить?» → `siteLinks.projects.recipes`
- «Дорожный драйв» → `siteLinks.projects.roadDrive`

Пока значение пустое, кнопка остаётся на странице и никуда не уводит. Не указывайте localhost.

## Куда положить изображения

Все файлы — в папку `public/`:

- `public/portrait.jpg`
- `public/lumi-shot.png`
- `public/cooking-shot.png`
- `public/game-shot.png`
