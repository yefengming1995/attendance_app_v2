import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangeInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-information',
  templateUrl: 'change-information.html',
})
export class ChangeInformationPage {

  changeinformation = {
    college: '',
    major: '',
    year: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeInformationPage');
  }

  submit() {
    this.navCtrl.pop();
  }
}
