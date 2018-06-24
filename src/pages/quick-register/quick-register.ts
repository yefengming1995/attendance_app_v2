import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LoginPage} from "../login/login";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

/**
 * Generated class for the QuickRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quick-register',
  templateUrl: 'quick-register.html',
})
export class QuickRegisterPage {
  @ViewChild('registerSlides')registerSlides:any;
  quickregister = {
    identity:'',
    password:'',
    phone:'',
    code:''
  };
  textSend='发送验证码';
  boolSend=false;
  clock;
  nums;
  user={
    identity:'',
    password:'',
    phone:'',
    time:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController,private authenticationCodeService:AuthenticationCodeProvider,private storage:LocalStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickRegisterPage');
    this.registerSlides.lockSwipes(true);
  }
  next() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slideNext();
    this.registerSlides.lockSwipes(true);
  }

  previous() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slidePrev();
    this.registerSlides.lockSwipes(true);
  }
  send() {
    console.log(this.quickregister.code=this.authenticationCodeService.createCode(4));
    //没有使用短信云服务发送验证码，先在控制台输出生成的验证码
    this.nums = 60;
    this.textSend = this.nums + '秒后可重新获取';
    this.boolSend = true;

    this.clock = setInterval(() => {
      this.nums--;
      console.log(this.nums);
      if (this.nums > 0) {
        this.textSend = this.nums + '秒后可重新获取';
      } else {
        this.textSend = '发送验证码';
        this.boolSend = false;
        clearInterval(this.clock);
      }

    }, 1000);
  }
  validateCode() {
    if (this.authenticationCodeService.validate(this.quickregister.code)) {
      this.textSend = '发送验证码';
      this.boolSend = false;
      clearInterval(this.clock);
    }
    else {
      console.log('短信验证码不正确或者已过期');
      let toast = this.toastCtrl.create({
        message: '短信验证码不正确或者已过期',
        duration: 3000
      });
      toast.present();
    }
  }
  storageMes(){
    var now=new Date();
    var month=now.getUTCMonth()+1;
    var time=now.getFullYear()+"-"+month+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    this.user.identity=this.quickregister.identity;
    this.user.password=this.quickregister.password;
    this.user.phone=this.quickregister.phone;
    this.user.time=time;
    this.storage.set(this.user.phone,this.user);

    this.next();
  }
  goHome(){
    this.navCtrl.push(LoginPage);
  }
}
