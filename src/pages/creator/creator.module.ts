import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatorPage } from './creator';

@NgModule({
  declarations: [
    CreatorPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatorPage),
  ],
})
export class CreatorPageModule {}
