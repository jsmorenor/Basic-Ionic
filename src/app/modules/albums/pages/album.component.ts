import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '@modules/albums/services/album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  public albums$!: Observable<any>;
  public username!: string;
  public error?: string;
  public isUserFound = false;

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;
    this.albums$ = this.albumService.getAlbums(id);
    this.albumService.getOwner(id).subscribe(data => {
      this.isUserFound = true;
      if (data) {
        this.username = data.username;
      } else {
        this.error = 'Usuario no encontrado';
      }
    });
  }

}
