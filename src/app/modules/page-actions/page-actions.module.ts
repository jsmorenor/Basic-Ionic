import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageActionsComponent } from '@modules/page-actions/components/page-actions/page-actions.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ PageActionsComponent ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ PageActionsComponent ],
})
export class PageActionsModule {}
