'use client';

import {
  RequestCookie,
  ResponseCookie,
} from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { CredentialStorageInterface } from '../../internal-tools-interfaces';

class CredentialStorage implements CredentialStorageInterface {
  protected CookieService = cookies();

  setCredential(key: string, value: string, options: ResponseCookie): void {
    this.CookieService.set(key, value, options);
  }

  getCredential(key: string): RequestCookie | undefined {
    return this.CookieService.get(key);
  }

  removeCredential(key: string): void {
    this.CookieService.delete(key);
  }

  invalidate(): void {
    for (let cookie in this.CookieService.getAll()) {
      this.CookieService.delete(cookie);
    }
  }
}

export const CSI = new CredentialStorage();
