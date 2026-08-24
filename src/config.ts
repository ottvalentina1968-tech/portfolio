/**
 * Ссылки, контакты и пути к изображениям.
 * Меняйте значения только в этом файле.
 *
 * Пока ссылка пустая, кнопка остаётся на странице
 * и никуда не перенаправляет. Не используйте localhost.
 *
 * Примеры:
 *   telegram: 'https://t.me/username'
 *   email: 'name@domain.com'
 *   projects.lumi: 'https://your-lumi-site.example'
 *   projects.roadDrive: 'https://username.github.io/road-drive/'
 */
export const siteLinks = {
  telegram: 'https://t.me/OttVal',
  email: 'ottvalentina@gmx.de',
  emailExtra: 'ottvalentina@mail.ru',
  cookingApk:
    'https://github.com/ottvalentina1968-tech/what-to-cook/releases/download/v1.0.0/WhatToCook.apk',

  projects: {
    lumi: 'https://ottvalentina1968-tech.github.io/Lumi/',
    cooking: 'https://github.com/ottvalentina1968-tech/what-to-cook/releases/tag/v1.0.0',
    german: '',
  },
} as const;

export const siteAssets = {
  portrait: '/portrait-web.jpg',
  lumiShot: '/lumi-shot.png',
  cookingShot: '/cooking-shot.png',
  germanShot: '/german-shot.png',
} as const;

export function publicUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

function isEmpty(url: string): boolean {
  return url.trim().length === 0;
}

export function isExternalHref(url: string): boolean {
  return /^https?:\/\//.test(url.trim());
}

function preventPlaceholderNavigation(event: { preventDefault: () => void }) {
  event.preventDefault();
}

export function linkProps(url: string) {
  if (isEmpty(url)) {
    return {
      href: '#',
      onClick: preventPlaceholderNavigation,
      'aria-disabled': true,
    } as const;
  }

  const href = url.trim();

  if (isExternalHref(href)) {
    return {
      href,
      target: '_blank',
      rel: 'noopener noreferrer',
    } as const;
  }

  return { href } as const;
}

export function emailLinkProps(email: string) {
  if (isEmpty(email)) {
    return {
      href: '#',
      onClick: preventPlaceholderNavigation,
      'aria-disabled': true,
    } as const;
  }

  return { href: `mailto:${email.trim()}` } as const;
}
