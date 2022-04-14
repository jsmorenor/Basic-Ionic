import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '@modules/albums/services/album.service';
import { Observable } from 'rxjs';
import { User } from '@core/models/user';
import { Album } from '@core/models/album';
import { OwnerService } from '@shared/services/owner.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [ './album.component.scss' ],
})
export class AlbumComponent implements OnInit {
  public albums$!: Observable<Album[]>;
  public username!: User;
  public errorMessage?: string;
  public isUserFound = false;
  public userId!: string;

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.albums$ = this.albumService.getAlbums(this.userId);
    this.ownerService.getOwner(this.userId).subscribe(data => {
      this.isUserFound = true;
      if (data) {
        this.username = data;
      } else {
        this.errorMessage = 'Usuario no encontrado';
      }
    });
  }
}
