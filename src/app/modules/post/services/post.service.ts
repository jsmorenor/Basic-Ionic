import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = environment.apiUrl;
  constructor(private httpService: HttpClient) { }

  public getPost(userId: string | number): Observable<any> {
    return this.httpService
      .get(`${this.url}users/${userId}/posts`)
      .pipe(
         catchError( () => of(undefined))
      );
  }
}
