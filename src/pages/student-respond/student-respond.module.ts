import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentRespondPage } from './student-respond';

@NgModule({
  declarations: [
    StudentRespondPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentRespondPage),
  ],
})
export class StudentRespondPageModule {}
