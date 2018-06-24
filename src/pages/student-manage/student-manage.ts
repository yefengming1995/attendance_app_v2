import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChangeInformationPage} from "../change-information/change-information";
import {ChangePasswordPage} from "../change-password/change-password";
import {LoginPage} from "../login/login";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {StudentLeaveApplyPage} from "../student-leave-apply/student-leave-apply";
import {StudentRespondPage} from "../student-respond/student-respond";
import {StudentLeavePage} from "../student-leave/student-leave";

/**
 * Generated class for the StudentManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-manage',
  templateUrl: 'student-manage.html',
})
export class StudentManagePage {

  current_user = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:LocalStorageProvider,private alterCtrl:AlertController) {
    this.current_user = this.navParams.get("current_user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentManagePage');
  }

  toStudentLeaveApplyPage(){
    this.navCtrl.push(StudentLeaveApplyPage,{'current_user': this.current_user});
  }

  toStudentLeavePage(){
    this.navCtrl.push(StudentLeavePage,{'current_user': this.current_user});
  }

  toStudentRespondPage(){
    this.navCtrl.push(StudentRespondPage,{'current_user': this.current_user});
  }

  toChangeInformationPage(){
    this.navCtrl.push(ChangeInformationPage,{'current_user': this.current_user});
  }

  toChangePasswordPage(){
    this.navCtrl.push(ChangePasswordPage,{'current_user': this.current_user});
  }

  exit(){
    let alert=this.alterCtrl.create({
      title:'确认退出？',
      buttons:[{
        text:'确定',
        handler:()=>{
          this.navCtrl.setRoot(LoginPage);
        }
      },'取消']
    });
    alert.present();
  }

}
