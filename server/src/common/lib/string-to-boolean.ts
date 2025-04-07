export function stringToBoolean(item: string | boolean) {
  if (typeof item === 'boolean') return item;
  return ['1', 'true'].includes(item);
}