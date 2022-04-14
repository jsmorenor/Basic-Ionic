import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '@core/models/user';
import { Post } from '@core/models/post';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private url = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  public getOwner(userId: string | number): Observable<User | undefined> {
    return this.httpService.get(`${ this.url }users/${ userId }`)
      .pipe(
        map(res => res as User),
        catchError(() => of(undefined)),
      );
  }

  public getPostOwner(postId: string | number) {
    return this.httpService.get(`${ this.url }posts/${ postId }`)
      .pipe(
        map(res => res as Post),
        catchError(() => of(undefined)),
      );
  }
}
