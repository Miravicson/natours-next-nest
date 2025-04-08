export function stringToBoolean(item: string | boolean) {
  if (typeof item === 'boolean') return item;
  return ['1', 'true'].includes(item);
}

export function choice<T>(arr: T[]): T {
  if (arr.length === 0) throw new Error('Array cannot be empty');
  return arr[Math.floor(Math.random() * arr.length)] as T;
}