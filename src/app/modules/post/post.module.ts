import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PostComponent } from '@modules/post/pages/post.component';

import { PostService } from '@modules/post/services/post.service';
import { HeaderModule } from '@modules/header/header.module';

@NgModule({
  declarations: [ PostComponent ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HeaderModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
  ],
  providers: [ PostService ],
})
export class PostModule {}
