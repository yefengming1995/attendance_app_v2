import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherLeavePage } from './teacher-leave';

@NgModule({
  declarations: [
    TeacherLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherLeavePage),
  ],
})
export class TeacherLeavePageModule {}
