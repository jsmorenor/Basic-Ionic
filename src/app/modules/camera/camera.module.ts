import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraRoutingModule } from '@modules/camera/camera-routing.module';
import { IonicModule } from '@ionic/angular';
import { CameraComponent } from '@modules/camera/pages/camera.component';
import { PhotoService } from '@modules/camera/services/photo.service';
import { HeaderModule } from '@modules/header/header.module';


@NgModule({
  declarations: [ CameraComponent ],
  imports: [
    CommonModule,
    CameraRoutingModule,
    IonicModule,
    HeaderModule,
  ],
  providers: [ PhotoService ],
})
export class CameraModule {}
