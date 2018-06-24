import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertProvider} from "../../providers/alert/alert";

/**
 * Generated class for the TeacherLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-leave',
  templateUrl: 'teacher-leave.html',
})
export class TeacherLeavePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherLeavePage');
  }

  submit() {
    this.alert.alertMessages('功能开发中，敬请期待...');
  }

}
