import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from '@modules/comments/pages/comment.component';
import { IonicModule } from '@ionic/angular';
import { CommentService } from '@modules/comments/services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@modules/header/header.module';
import { PostModule } from '@modules/post/post.module';
import { CommentCardComponent } from '@modules/comments/components/comment-card/comment-card.component';
import { CommentTitleComponent } from '@modules/comments/components/comment-title/comment-title.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ CommentComponent, CommentCardComponent, CommentTitleComponent ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HeaderModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
    PostModule,
    SharedModule,
  ],
  providers: [ CommentService ],
})
export class CommentModule {}
