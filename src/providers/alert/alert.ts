import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AlertController} from "ionic-angular";

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController) {
    console.log('Hello AlertProvider Provider');
  }

  alertMessages(mess) {
    let alert = this.alertCtrl.create({
      title: '信息',
      message: mess,
      buttons:['确定']
    });
    alert.present();
  }

}
