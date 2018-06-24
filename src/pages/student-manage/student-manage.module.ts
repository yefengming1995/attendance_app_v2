import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentManagePage } from './student-manage';

@NgModule({
  declarations: [
    StudentManagePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentManagePage),
  ],
})
export class StudentManagePageModule {}
