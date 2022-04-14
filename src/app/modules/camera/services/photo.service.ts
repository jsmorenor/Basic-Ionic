import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserPhoto } from '@core/models/user-photo';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  #photos: UserPhoto[] = [];
  private readonly photoStorage = 'photos';

  constructor() { }

  public get photos() {
    return this.#photos;
  }

  public set photos(value) {
    this.#photos = value;
  }

  public async loadSaved() {
    const photoList = await Storage.get({ key: this.photoStorage });
    this.#photos = typeof photoList.value === 'string' ? JSON.parse(photoList.value) : [];

    for (const photo of this.photos) {
      const readFile = await Filesystem.readFile({
        path: photo.filePath,
        directory: Directory.Data,
      });

      photo.webviewPath = `data:image/jpeg;base64,${ readFile.data }`;
    }
  }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);

    await Storage.set(
      {
        key: this.photoStorage,
        value: JSON.stringify(this.#photos),
      },
    );
  }

  private async savePicture(photo: Photo) {
    const data = await this.readAsBase64(photo);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: fileName,
      data,
    });

    return {
      filePath: fileName,
      webviewPath: photo.webPath,
    };
  }

  private async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath as string);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}
