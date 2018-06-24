import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherReportPage } from './teacher-report';

@NgModule({
  declarations: [
    TeacherReportPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherReportPage),
  ],
})
export class TeacherReportPageModule {}
