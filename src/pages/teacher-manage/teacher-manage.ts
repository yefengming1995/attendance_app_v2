import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChangePasswordPage} from "../change-password/change-password";
import {LoginPage} from "../login/login";
import {ChangeInformationPage} from "../change-information/change-information";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {TeacherReportPage} from "../teacher-report/teacher-report";
import {TeacherApplyPage} from "../teacher-apply/teacher-apply";
import {TeacherLeavePage} from "../teacher-leave/teacher-leave";
import {TeacherRespondPage} from "../teacher-respond/teacher-respond";

/**
 * Generated class for the TeacherManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-manage',
  templateUrl: 'teacher-manage.html',
})
export class TeacherManagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:LocalStorageProvider,private alterCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherManagePage');
  }

  toTeacherReportPage(){
    this.navCtrl.push(TeacherReportPage);
  }

  toTeacherApplyPage(){
    this.navCtrl.push(TeacherApplyPage);
  }

  toTeacherLeavePage(){
    this.navCtrl.push(TeacherLeavePage);
  }

  toTeacherRespondPage(){
    this.navCtrl.push(TeacherRespondPage);
  }

  toChangeInformationPage(){
    this.navCtrl.push(ChangeInformationPage);
  }

  toChangePasswordPage(){
    this.navCtrl.push(ChangePasswordPage);
  }

  exit(){
    let alert=this.alterCtrl.create({
      title:'确认退出？',
      buttons:[{
        text:'确定',
        handler:()=>{
          this.storage.remove("currentUser");
          this.navCtrl.setRoot(LoginPage);
          this.navCtrl.popToRoot();
        }
      },'取消']
    });
    alert.present();
  }

}
