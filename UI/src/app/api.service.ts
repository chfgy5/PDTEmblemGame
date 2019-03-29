import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlRoot = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  private async doThing() {
    return '';
  }

  public get(route: string): Observable<any> {
    const url = `${this.urlRoot}/${route}`;

      const options = this.buildOptions();
      return this.http.get(url, options).pipe(catchError(this.handleError('get', url)));
  }

  public post(route: string, data: any): Observable<any> {
    const url = `${this.urlRoot}/${route}`;

      const options = this.buildOptions();
      return this.http.post(url, data, options).pipe(catchError(this.handleError('post', url)));
  }

  public put(route: string, data: any): Observable<any> {
    const url = `${this.urlRoot}/${route}`;

      const options = this.buildOptions();
      return this.http.put(url, data, options).pipe(catchError(this.handleError('put', url)));
  }

  public delete(route: string): Observable<any> {
    const url = `${this.urlRoot}/${route}`;

      const options = this.buildOptions();
      return this.http.delete(url, options).pipe(catchError(this.handleError('delete', url)));
  }

  private buildOptions(options?: any): any {
    return  new HttpHeaders ({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    });
  }

  private handleError(operation: string, url: string) {
    return (err: any) => {
        const errMsg = `error in ${operation}() for ${url}`;
        console.log(`${errMsg}:`, err);
        if (err instanceof HttpErrorResponse) {
            console.log(`status: ${err.status}, ${err.statusText}`);
        }

        return Observable.throw(err);
    };
  }
}
