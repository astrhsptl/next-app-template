import { QueryParam } from '@/shared';
import { EntityId } from '@/shared/base-interfaces';
import axios, { AxiosRequestConfig } from 'axios';
import { compileUrlPath } from './api-tools';

export class APITemplate {
  private url;

  constructor(baseUrl: string, urlPrefix: string) {
    this.url = baseUrl + urlPrefix;
  }

  async fetchAll<FetchType>(
    queryParams?: QueryParam,
    RequestConfig?: AxiosRequestConfig
  ) {
    let url = compileUrlPath(this.url, queryParams);
    return await axios.get<FetchType>(url, RequestConfig);
  }

  async fetchByID<FetchType>(id: EntityId, RequestConfig?: AxiosRequestConfig) {
    let url = `${this.url}${id}`;
    return await axios.get<FetchType>(url, RequestConfig);
  }

  async create() {}
  async update() {}
  async delete<FetchType>(id: EntityId, RequestConfig?: AxiosRequestConfig) {
    let url = `${this.url}${id}`;
    return await axios.delete<FetchType>(url, RequestConfig);
  }
}
