import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Post } from '@core/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  public getPost(userId: string | number): Observable<Post[]> {
    return this.httpService
      .get(`${ this.url }users/${ userId }/posts`)
      .pipe(
        map(data => data as Post[]),
        catchError(() => of([])),
      );
  }
}
