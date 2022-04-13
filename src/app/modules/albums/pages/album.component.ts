import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '@modules/albums/services/album.service';
import { Observable } from 'rxjs';
import { User } from '@core/models/user';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [ './album.component.scss' ],
})
export class AlbumComponent implements OnInit {
  public albums$!: Observable<any>;
  public username!: User;
  public errorMessage?: string;
  public isUserFound = false;
  public userId!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private albumService: AlbumService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.albums$ = this.albumService.getAlbums(this.userId);
    this.albumService.getOwner(this.userId).subscribe(data => {
      this.isUserFound = true;
      if (data) {
        this.username = data;
      } else {
        this.errorMessage = 'Usuario no encontrado';
      }
    });
  }

  public changePage(page: string): void {
    this.router.navigate([ '/', 'users', this.userId, page ]).then();
  }

}
