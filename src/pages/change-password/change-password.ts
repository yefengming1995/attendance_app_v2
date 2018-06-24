import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http, URLSearchParams} from "@angular/http";
import {AlertProvider} from "../../providers/alert/alert";

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  current_user = '';

  changepassword={
    oldpassword:'',
    newpassword:'',
    newconfirmpassword:''
};

  pas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertMess: AlertProvider, public http: Http) {
    this.current_user = this.navParams.get('current_user');
    console.log(this.current_user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  submit() {
    if (this.changepassword.newconfirmpassword.toString() != this.changepassword.newpassword.toString()) {
      this.alertMess.alertMessages('两次密码输入不同！请重新输入！')
    } else {
      //发送请求（账号 + 新密码）
      let changePasswordRequest = new URLSearchParams();
      changePasswordRequest.append('userid', this.current_user);
      changePasswordRequest.append('password', this.changepassword.newpassword);

      let changePasswordURL = 'http://119.29.225.79:8080/login/ModifyPassword'
      this.http.post(changePasswordURL, changePasswordRequest).map(res => res.json()).subscribe();

      this.alertMess.alertMessages('密码修改成功！');
      this.navCtrl.pop();
    }
  }

}
