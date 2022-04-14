import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@modules/camera/services/photo.service';
import { UserPhoto } from '@core/models/user-photo';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: [ './camera.component.scss' ],
})
export class CameraComponent implements OnInit {
  public photos: UserPhoto[] = [];

  constructor(private photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
    this.photos = this.photoService.photos;
  }

  public addPhotoToGallery() {
    this.photoService.addNewToGallery().then();
  }

}
