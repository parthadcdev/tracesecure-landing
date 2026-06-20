const WINE_HOST_PREFIX = 'wine.';

export function isWineHostname(hostname = typeof window !== 'undefined' ? window.location.hostname : '') {
  return hostname.startsWith(WINE_HOST_PREFIX);
}

/** URL for Wine industry experience: subdomain in prod, path on localhost */
export function getWineIndustryUrl() {
  if (typeof window === 'undefined') {
    return 'https://wine.tracesecure.co';
  }
  const { hostname, protocol, port } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return '/industries/wine';
  }
  if (isWineHostname(hostname)) {
    return '/';
  }
  return `${protocol}//wine.tracesecure.co${port ? `:${port}` : ''}`;
}

export function isExternalUrl(url) {
  return /^https?:\/\//i.test(url);
}
