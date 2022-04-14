import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from '@modules/camera/pages/camera.component';

const routes: Routes = [
  {
    path: '', component: CameraComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CameraRoutingModule {}
