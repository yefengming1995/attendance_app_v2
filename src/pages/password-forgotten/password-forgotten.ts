import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertProvider} from "../../providers/alert/alert";
import {Http, URLSearchParams} from "@angular/http";

/**
 * Generated class for the PasswordForgottenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-forgotten',
  templateUrl: 'password-forgotten.html',
})
export class PasswordForgottenPage {
  forgotten = {
    account:'',
    id:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertProvider, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordForgottenPage');
  }

  resetPassword() {
    if (this.forgotten.account == '') {
      this.alert.alertMessages('请输入账号！');
    } else {
      if (this.forgotten.id == '') {
        this.alert.alertMessages('请输入工号或学号！')
      } else {
        //发送请求（账号 + 工号/学号），接收数据（空 或 对应的信息）
        let useridRequest = new URLSearchParams();
        useridRequest.append('username',this.forgotten.account);
        useridRequest.append('userid',this.forgotten.id);

        let useridURL = 'http://119.29.225.79:8080/login/ResetPassword';
        this.http.post(useridURL,useridRequest).map(res => res.json()).subscribe(data => {
          console.log(JSON.stringify(data));
          if(data.data[0].status == 'useridWrong') {
            this.alert.alertMessages('账号或工号/学号输入错误！')
          } else {
            this.alert.alertMessages('密码已重置为123456，请进入系统进行密码修改！');
            this.navCtrl.pop();
          }
        });
      }
    }
  }
}
