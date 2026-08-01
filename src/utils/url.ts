const MULTI_SLASH = new RegExp('/{2,}', 'g');

export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}/${path}`.replace(MULTI_SLASH, '/');
}
