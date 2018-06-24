import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherCheckInPage } from './teacher-check-in';

@NgModule({
  declarations: [
    TeacherCheckInPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherCheckInPage),
  ],
})
export class TeacherCheckInPageModule {}
