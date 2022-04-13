import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from '@modules/users/pages/all-users.component';

const routes: Routes = [
  { path: '', component: AllUsersComponent },
  { path: 'users/:id', children: [
      { path: 'albums', loadChildren: () => import('@modules/albums/album.module').then((m) => m.AlbumModule ) },
      { path: 'post', loadChildren: () => import('@modules/post/post.module').then((m) => m.PostModule ) },
    ] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UserRoutingModule {}
