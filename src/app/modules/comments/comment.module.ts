import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from '@modules/comments/pages/comment.component';
import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { CommentService } from '@modules/comments/services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ CommentComponent ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    SharedModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [ CommentService ],
})
export class CommentModule {}
