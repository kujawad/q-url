import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class QurlService {
  constructor(private http: HttpClient) {
  }

  serveUrl(path: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(`${environment.QURL_API_URL}${path}`,
      {headers, observe: 'response'})
      .pipe(catchError(this.formatErrors));
  }

  addUrl(path: string, body: Object = {}): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${environment.QURL_API_URL}${path}`,
      JSON.stringify(body),
      {headers, observe: 'response'}
    ).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
