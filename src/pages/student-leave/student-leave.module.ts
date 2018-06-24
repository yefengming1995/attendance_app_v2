import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLeavePage } from './student-leave';

@NgModule({
  declarations: [
    StudentLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentLeavePage),
  ],
})
export class StudentLeavePageModule {}
