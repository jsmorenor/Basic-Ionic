import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PostComponent } from '@modules/post/pages/post.component';

import { PostService } from '@modules/post/services/post.service';
import { HeaderModule } from '@modules/header/header.module';
import { PostCardComponent } from '@modules/post/components/post-card/post-card.component';
import { PageActionsModule } from '@modules/page-actions/page-actions.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PostComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HeaderModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
    PageActionsModule,
    SharedModule,
  ],
  providers: [ PostService ],
  exports: [
    PostCardComponent,
  ],
})
export class PostModule {}
