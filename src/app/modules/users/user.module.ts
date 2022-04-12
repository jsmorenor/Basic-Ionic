import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AllUsersComponent } from '@modules/users/pages/all-users.component';
import { IonicModule } from '@ionic/angular';
import { UserService } from '@modules/users/services/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AllUsersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    IonicModule,
    HttpClientModule,
  ],
  providers: [ UserService ],
})
export class UserModule {}
