import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private url = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  public getOwner(userId: string | number): Observable<any> {
    return this.httpService
      .get(`${ this.url }users/${ userId }`)
      .pipe(
        catchError(() => of(undefined)),
      );
  }

  public getAlbums(userId: string | number): Observable<any> {
    return this.httpService
      .get(`${ this.url }users/${ userId }/albums`)
      .pipe(
        catchError(() => of([])),
      );
  }
}
