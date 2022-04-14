import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabNavComponent } from '@modules/tab/components/tab-nav/tab-nav.component';

const routes: Routes = [
  {
    path: '', component: TabNavComponent,
    children: [
      { path: '', loadChildren: () => import('@modules/users/user.module').then(module => module.UserModule) },
      {
        path: 'post',
        loadChildren: () => import('@modules/comments/comment.module').then(module => module.CommentModule),
      },
      {
        path: 'camera',
        loadChildren: () => import('@modules/camera/camera.module').then(module => module.CameraModule),
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class TabRoutingModule {}
