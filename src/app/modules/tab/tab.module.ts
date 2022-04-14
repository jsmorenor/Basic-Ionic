import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabRoutingModule } from '@modules/tab/tab-routing.module';
import { TabNavComponent } from '@modules/tab/components/tab-nav/tab-nav.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ TabNavComponent ],
  imports: [
    CommonModule,
    TabRoutingModule,
    IonicModule,
  ],
})
export class TabModule {}
