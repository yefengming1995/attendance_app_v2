import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams, AlertController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {TeacherHomePage} from "../teacher-home/teacher-home";
import {StudentHomePage} from "../student-home/student-home";
import {AlertProvider} from "../../providers/alert/alert";
import {Http, URLSearchParams} from "@angular/http";
import {PasswordForgottenPage} from "../password-forgotten/password-forgotten";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage: any = LoginPage;

  login = {
    identity:'',
    account:'',
    password:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertMess: AlertProvider, public http: Http, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  toForgotPassword() {
    this.navCtrl.push(PasswordForgottenPage);
  }
  toRegister() {
    this.navCtrl.push(RegisterPage);
  }

  toLogin() {
    if (this.login.account == '') {
      this.alertMess.alertMessages('请输入账号！');
    } else {
      //发送请求（账号 + 密码），接收回复（空 或 对应的所有信息）
      let loginRequest = new URLSearchParams();
      loginRequest.append('username',this.login.account);
      loginRequest.append('password',this.login.password);

      let loginURL = 'http://119.29.225.79:8080/login/LoginJudge'
      this.http.post(loginURL,loginRequest).map(res => res.json()).subscribe(data => {
        console.log(JSON.stringify(data));

        if(data.data.length != '0') {
          console.log('role: ' +　data.data[0].role);
          if(data.data[0].role == '1') {
            let loading_teach = this.loadingCtrl.create({
              content: '正在进入教师页面...'//数据加载中显示
            });
            loading_teach.present();
            setTimeout(() => {
              loading_teach.dismiss();//显示多久消失
              this.navCtrl.setRoot(TeacherHomePage,{'current_user': data.data[0].userid});
            }, 2000);
          } else if(data.data[0].role == '2') {
            let loading_stu = this.loadingCtrl.create({
              content: '正在进入学生页面...'//数据加载中显示
            });
            loading_stu.present();
            setTimeout(() => {
              loading_stu.dismiss();//显示多久消失
              this.navCtrl.setRoot(StudentHomePage,{'current_user': data.data[0].userid});
            }, 2000);
          }
        } else {
          this.alertMess.alertMessages('账号或密码输入有误！');
        }

      });
    }
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: '登录中...'//数据加载中显示
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();//显示多久消失
    }, 5000);
  }
}

