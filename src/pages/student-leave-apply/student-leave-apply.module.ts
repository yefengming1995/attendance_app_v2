import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLeaveApplyPage } from './student-leave-apply';

@NgModule({
  declarations: [
    StudentLeaveApplyPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentLeaveApplyPage),
  ],
})
export class StudentLeaveApplyPageModule {}
