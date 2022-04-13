import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from '@modules/comments/pages/comment.component';

const routes: Routes = [
  { path: ':id', component: CommentComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CommentRoutingModule {}
