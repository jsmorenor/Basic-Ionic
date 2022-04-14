import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@modules/header/components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { SearcherComponent } from '@modules/header/components/searcher/searcher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { OwnerService } from '@shared/services/owner.service';


@NgModule({
  declarations: [
    HeaderComponent,
    SearcherComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ OwnerService ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {}
