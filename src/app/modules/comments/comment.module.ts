import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from '@modules/comments/pages/comment.component';
import { IonicModule } from '@ionic/angular';
import { CommentService } from '@modules/comments/services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@modules/header/header.module';


@NgModule({
  declarations: [ CommentComponent ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HeaderModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [ CommentService ],
})
export class CommentModule {}
