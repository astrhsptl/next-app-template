import {
  RequestCookie,
  ResponseCookie,
} from 'next/dist/compiled/@edge-runtime/cookies';

export interface CredentialStorageInterface {
  setCredential(key: string, value: string, options: ResponseCookie): void;
  getCredential(key: string): RequestCookie | undefined;
  removeCredential(key: string): void;
  invalidate(): void;
}
