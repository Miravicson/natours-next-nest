export function isPublicRoute(path: string): boolean {
  return ['/login', '/logout', '/forgot-password', '/reset-password'].includes(path);
}