import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserPhoto } from '@core/models/user-photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  #photos: UserPhoto[] = [];

  constructor() { }

  public get photos() {
    return this.#photos;
  }

  public set photos(value) {
    this.#photos = value;
  }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photos.unshift({
      filePath: '...',
      webviewPath: capturedPhoto.webPath,
    });
  }
}
