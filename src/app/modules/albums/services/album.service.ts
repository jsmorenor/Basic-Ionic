import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Album } from '@core/models/album';
import { User } from '@core/models/user';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private url = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  public getOwner(userId: string | number): Observable<User | undefined> {
    return this.httpService
      .get(`${ this.url }users/${ userId }`)
      .pipe(
        map(data => data as User),
        catchError(() => of(undefined)),
      );
  }

  public getAlbums(userId: string | number): Observable<Album[]> {
    return this.httpService
      .get(`${ this.url }users/${ userId }/albums`)
      .pipe(
        map(data => data as Album[]),
        catchError(() => of([] as Album[])),
      );
  }
}
