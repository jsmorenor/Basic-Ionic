import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpService
      .get(`${this.url}users`)
      .pipe(
        map((user: unknown) => user as User[]),
        catchError(err => of([{}] as User[]))
      );
  }

  public getUserAlbums(userId: string | number): void {
    this.httpService
      .get(`${this.url}users/${userId}/albums`)
      .pipe(
        tap(console.log),
        map((user: unknown) => user as User[]),
        catchError(err => of([{}] as User[]))
      );
  }
}
