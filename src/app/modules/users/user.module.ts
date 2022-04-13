import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AllUsersComponent } from '@modules/users/pages/all-users.component';
import { IonicModule } from '@ionic/angular';
import { UserService } from '@modules/users/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@modules/header/header.module';


@NgModule({
  declarations: [
    AllUsersComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    UserRoutingModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [ UserService ],
})
export class UserModule {}
