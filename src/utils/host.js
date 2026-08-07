const WINE_HOST_PREFIX = 'wine.';

export function isWineHostname(hostname = typeof window !== 'undefined' ? window.location.hostname : '') {
  return hostname.startsWith(WINE_HOST_PREFIX);
}

/** URL for Wine industry landing (path-based; wine subdomain serves the same page at `/`) */
export function getWineIndustryUrl() {
  if (typeof window !== 'undefined' && isWineHostname()) {
    return '/';
  }
  return '/industries/wine';
}

export function isExternalUrl(url) {
  return /^https?:\/\//i.test(url);
}
