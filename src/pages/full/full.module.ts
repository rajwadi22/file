import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullPage } from './full';

@NgModule({
  declarations: [
    FullPage,
  ],
  imports: [
    IonicPageModule.forChild(FullPage),
  ],
})
export class FullPageModule {}
