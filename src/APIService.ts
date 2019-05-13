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
    if (newAuthToken) {
      this._authToken = newAuthToken;
    } else {
      console.log("Error: No auth token provided");
    }
  }

  get headers (): string[][] {
    return this._headers;
  }

  set method (newMethod: ApiMethod) {
    if (newMethod) {
      this._authToken = newMethod;
    } else {
      console.log("Error: No method provided");
    }
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
    if (newRequestBody) {
      this._requestBody = newRequestBody;
    } else {
      console.log("Error: No request body provided");
    }
  }
}

export default APIService;
