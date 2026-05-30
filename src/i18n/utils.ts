import { ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return 'sq';
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}
