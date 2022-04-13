import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getPostComments(postId: string | number): Observable<any> {
    return this.httpClient.get(`${ this.url }post/${ postId }/comments`)
      .pipe(
        catchError(() => of([])),
      );
  }
}
