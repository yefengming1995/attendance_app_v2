import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertProvider} from "../../providers/alert/alert";

/**
 * Generated class for the TeacherRespondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-respond',
  templateUrl: 'teacher-respond.html',
})
export class TeacherRespondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherRespondPage');
  }

  submit() {
    this.alert.alertMessages('功能开发中，敬请期待...');
  }
}
