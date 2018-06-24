import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordForgottenPage } from './password-forgotten';

@NgModule({
  declarations: [
    PasswordForgottenPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordForgottenPage),
  ],
})
export class PasswordForgottenPageModule {}
