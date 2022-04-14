import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from '@modules/albums/pages/album.component';
import { RouterModule } from '@angular/router';
import { AlbumService } from '@modules/albums/services/album.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '@modules/header/header.module';
import { PageActionsModule } from '@modules/page-actions/page-actions.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ AlbumComponent ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    HeaderModule,
    RouterModule,
    HttpClientModule,
    IonicModule,
    PageActionsModule,
    SharedModule,
  ],
  providers: [ AlbumService ],
})
export class AlbumModule {}
