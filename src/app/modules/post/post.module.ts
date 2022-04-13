import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostService } from '@modules/post/services/post.service';
import { PostComponent } from '@modules/post/pages/post.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
  ],
  providers: [PostService]
})
export class PostModule { }
