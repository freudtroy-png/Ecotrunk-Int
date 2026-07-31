import { useEffect } from 'react';
import { getSeoForPath, SITE, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '../data/seo';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ path = '/', title, description, keywords }) {
  useEffect(() => {
    const route = getSeoForPath(path);
    const finalTitle = title || route?.title || DEFAULT_TITLE;
    const finalDescription = description || route?.description || DEFAULT_DESCRIPTION;
    const finalKeywords = keywords || route?.keywords || '';

    document.title = finalTitle;
    upsertMeta('name', 'description', finalDescription);
    if (finalKeywords) upsertMeta('name', 'keywords', finalKeywords);

    const url = `${SITE}${path}`;
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);

    upsertMeta('property', 'og:title', finalTitle);
    upsertMeta('property', 'og:description', finalDescription);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('name', 'twitter:title', finalTitle);
    upsertMeta('name', 'twitter:description', finalDescription);
  }, [path, title, description, keywords]);

  return null;
}
