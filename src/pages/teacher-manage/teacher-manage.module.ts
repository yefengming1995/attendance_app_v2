import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherManagePage } from './teacher-manage';

@NgModule({
  declarations: [
    TeacherManagePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherManagePage),
  ],
})
export class TeacherManagePageModule {}
