import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from '@modules/albums/pages/album.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { AlbumService } from '@modules/albums/services/album.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    IonicModule,
  ],
  providers: [AlbumService]
})
export class AlbumModule { }
