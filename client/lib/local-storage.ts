
import { useEffect, useState } from 'react';

import { UserEntity } from './api-client/_generated';

// Utility function to safely access browser APIs
const isBrowser = typeof window !== 'undefined';

function safeBrowserOp<T>(operation: () => T, fallback: T): T {
  if (isBrowser) {
    return operation();
  }
  return fallback;
}

export class LocalStorage {
  static AUTH_USER_KEY = 'auth-user';
  static ACCESS_TOKEN_KEY = 'access-token';

  static getItem(key: string): string {
    return safeBrowserOp(() => localStorage.getItem(key) || '', '');
  }

  static setItem(key: string, item: string): void {
    safeBrowserOp(() => localStorage.setItem(key, item), undefined);
  }

  static remove(key: string): void {
    safeBrowserOp(() => localStorage.removeItem(key), undefined);
  }

  static getObject<T = object>(key: string): T | null {
    const objectString = this.getItem(key);
    return objectString ? (JSON.parse(objectString) as T) : null;
  }

  static setObject<T = object>(key: string, item: T): void {
    const objectString = JSON.stringify(item);
    this.setItem(key, objectString);
  }

  static setAuthUser(authUser: UserEntity | null) {
    this.setObject(this.AUTH_USER_KEY, authUser);
    safeBrowserOp(() => window.dispatchEvent(new Event('localStorageUpdate')), undefined);
  }

  static setAccessToken(accessToken: string) {
    this.setItem(this.ACCESS_TOKEN_KEY, accessToken);
  }

  static getAccessToken() {
    return this.getItem(this.ACCESS_TOKEN_KEY);
  }

  static getAuthUser() {
    return this.getObject<UserEntity>(this.AUTH_USER_KEY);
  }

  static removeAccessToken() {
    this.remove(this.ACCESS_TOKEN_KEY);
  }

  static removeAuthUser() {
    this.remove(this.AUTH_USER_KEY);
    safeBrowserOp(() => window.dispatchEvent(new Event('localStorageUpdate')), undefined);
  }
}

export function useUserFromLocalStorage() {
  const [value, setValue] = useState<UserEntity | null>(null);

  useEffect(() => {
    // Set initial value when component mounts on client
    setValue(LocalStorage.getAuthUser());
    
    const handleStorageUpdate = () => {
      setValue(LocalStorage.getAuthUser());
    };

    if (isBrowser) {
      window.addEventListener('localStorageUpdate', handleStorageUpdate);
      return () => window.removeEventListener('localStorageUpdate', handleStorageUpdate);
    }
    return undefined;
  }, []);

  return value;
}






