import { ApiMethod, KeyValue } from "./types";

export class APIService {

  private _method: ApiMethod = "POST";
  private _headers: string[][] = [];

  constructor (private _authToken: string) {
  }

  get authToken (): string {
    return this._authToken;
  }

  set authToken (newAuthToken: string) {
    this._authToken = newAuthToken;
  }

  get headers (): string[][] {
    return this._headers;
  }

  set method (newMethod: ApiMethod) {
    this._method = newMethod;
  }

  public setHeaders (headers: KeyValue<string, string>[]): APIService {
    for (const i in headers) {
      if (headers[i].hasOwnProperty('key')
        && headers[i].hasOwnProperty('value')) {
        this._headers.push([headers[i].key, headers[i].value]);
      }
    }
    return this;
  }

  public resetHeaders (): void {
    this._headers = [];
  }

  public setMethod (newMethod: ApiMethod): APIService {
    this._method = newMethod;
    return this;
  }

  public request<T> (body: T): RequestInit {
    return {
      headers: this._headers,
      method: this._method,
      body: JSON.stringify(body),
    }
  }
}

export class RequestBody<T> {

  constructor (private _requestBody: T) {
  }

  get requestBody (): T {
    return this._requestBody;
  }

  set requestBody (newRequestBody: T) {
    this._requestBody = newRequestBody;
  }
}

export default APIService;
