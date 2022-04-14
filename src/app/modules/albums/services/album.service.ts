import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Album } from '@core/models/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private url = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  public getAlbums(userId: string | number): Observable<Album[]> {
    return this.httpService
      .get(`${ this.url }users/${ userId }/albums`)
      .pipe(
        map(data => data as Album[]),
        catchError(() => of([] as Album[])),
      );
  }
}
