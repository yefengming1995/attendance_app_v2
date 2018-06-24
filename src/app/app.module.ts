import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import {PasswordForgottenPage} from "../pages/password-forgotten/password-forgotten";
import {StudentHomePage} from "../pages/student-home/student-home";
import {TeacherHomePage} from "../pages/teacher-home/teacher-home";
import {StudentAttendancePage} from "../pages/student-attendance/student-attendance";
import { AlertProvider } from '../providers/alert/alert';
import {HttpModule} from "@angular/http";
import {TeacherRespondPage} from "../pages/teacher-respond/teacher-respond";
import {TeacherManagePage} from "../pages/teacher-manage/teacher-manage";
import {TeacherLeavePage} from "../pages/teacher-leave/teacher-leave";
import {TeacherReportPage} from "../pages/teacher-report/teacher-report";
import {TeacherCheckInPage} from "../pages/teacher-check-in/teacher-check-in";
import {TeacherApplyPage} from "../pages/teacher-apply/teacher-apply";
import {StudentManagePage} from "../pages/student-manage/student-manage";
import {StudentRespondPage} from "../pages/student-respond/student-respond";
import {StudentLeavePage} from "../pages/student-leave/student-leave";
import {StudentLeaveApplyPage} from "../pages/student-leave-apply/student-leave-apply";
import {ChangePasswordPage} from "../pages/change-password/change-password";
import {ChangeInformationPage} from "../pages/change-information/change-information";
import {LocalStorageProvider} from "../providers/local-storage/local-storage";

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    LoginPage,
    PasswordForgottenPage,
    TeacherHomePage,
    TeacherCheckInPage,
    TeacherApplyPage,
    TeacherLeavePage,
    TeacherManagePage,
    TeacherReportPage,
    TeacherRespondPage,
    StudentHomePage,
    StudentAttendancePage,
    StudentManagePage,
    StudentRespondPage,
    StudentLeavePage,
    StudentLeaveApplyPage,
    ChangePasswordPage,
    ChangeInformationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    LoginPage,
    PasswordForgottenPage,
    TeacherHomePage,
    TeacherCheckInPage,
    TeacherApplyPage,
    TeacherLeavePage,
    TeacherManagePage,
    TeacherReportPage,
    TeacherRespondPage,
    StudentHomePage,
    StudentAttendancePage,
    StudentManagePage,
    StudentRespondPage,
    StudentLeavePage,
    StudentLeaveApplyPage,
    ChangePasswordPage,
    ChangeInformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertProvider,
    LocalStorageProvider
  ]
})
export class AppModule {}
