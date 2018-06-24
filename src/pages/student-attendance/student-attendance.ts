import { Component, ViewChild, ElementRef } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {Http, URLSearchParams} from "@angular/http";
import {AlertProvider} from "../../providers/alert/alert";
import {StudentHomePage} from "../student-home/student-home";

/**
 * Generated class for the StudentAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var BMap;

@IonicPage()
@Component({
  selector: 'page-student-attendance',
  templateUrl: 'student-attendance.html',
})

export class StudentAttendancePage {
  @ViewChild('map') mapElement: ElementRef;

  current_user = '';
  current_username = '';
  place_id = '';
  seatNumber = '';
  course_name = '';
  course_id = '';
  attendantStudents = new Array();
  signInTime: number;
  signTimeInterval: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public http: Http, public alertMess: AlertProvider, public alertCtrl: AlertController) {
    this.current_user = this.navParams.get('current_user');
    console.log(this.current_user);
    this.current_username = this.navParams.get('current_username');
    console.log(this.current_username);
    this.place_id = this.navParams.get('place_id');
    console.log(this.place_id);
    this.course_id = this.navParams.get('course_id');
    console.log(this.course_id);
    this.course_name = this.navParams.get('course_name');
    console.log(this.course_name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAttendancePage');

    //发送请求（place_id）
    let getAttendantStudentRequest = new URLSearchParams();
    getAttendantStudentRequest.append('place_id', this.place_id);

    let getAttendantStudentURL = 'http://119.29.225.79:8080/login/SignInSuccessStudent';
    this.http.post(getAttendantStudentURL, getAttendantStudentRequest).map(res => res.json()).subscribe(data => {
      //接收数据（place_id对应的已签到成功的学生名单()）
      console.log('attendant student: ' + data);

      for(var student of data.data) {
        this.attendantStudents.push([student.sign_stuId, student.sign_stuName, student.sign_stuSeat]);
      }
      console.log(this.attendantStudents);
    });
  }

  confirmSeatToSignIn() {
    if(this.signInTime != null) {
      this.alertMess.alertMessages('请不要重复签到！');
    } else {
      if (this.seatNumber == '') {
        this.alertMess.alertMessages("请选择您的座位！");
      } else {
        var row = (parseInt(this.seatNumber) - parseInt(this.seatNumber) % 10) / 10 + 1;
        var col = parseInt(this.seatNumber) % 10;

        let alert = this.alertCtrl.create({
          title: '信息',
          message: '您的座位是： 第' + row + '行，第' + col + '列',
          buttons: [{
            text: '确认', handler: () => {
              this.signIn();
            }
          }, {text: '取消'}]
        });
        alert.present();
      }
    }
  }

  signIn() {
    var geoLocation = new BMap.Geolocation();
    var lng, lat;
    var teach_lng, teach_lat;

    geoLocation.getCurrentPosition( r =>{
        lng = r.point.lng;
        lat = r.point.lat;
        console.log('您的位置：' + lng + ',' + lat);

        //发送请求（place_id）
        let getLocationRequest = new URLSearchParams();
        getLocationRequest.append('place_id', this.place_id);

        let getLocationURL = 'http://119.29.225.79:8080/login/StudentGetPlace';
        this.http.post(getLocationURL, getLocationRequest).map(res => res.json()).subscribe(data => {
          //接收数据（place_id对应的经纬度）
          console.log('teacher location: ' + data.data);
          if(data.data == '') {
            this.alertMess.alertMessages('老师上课后才能进行签到！')
          } else {
            teach_lng = data.data[0].place_longitude;
            teach_lat = data.data[0].place_latitude;

            var map = new BMap.Map("allmap");
            var pointStudent = new BMap.Point(lng, lat);  // 创建学生的点坐标
            var pointTeacher = new BMap.Point(teach_lng, teach_lat);  // 创建教师的点坐标，数据从服务器端获取
            var distance = map.getDistance(pointTeacher, pointStudent).toFixed(2);
            console.log('您与老师之间的距离是：' + distance + ' 米。');  //获取两点距离,保留小数点后两位

            if (parseFloat(distance) < 50) {
              console.log('Seat number: ' + this.seatNumber);

              //签到成功，回复数据（place_id + 账号）
              let signInSuccessRequest = new URLSearchParams();
              signInSuccessRequest.append('place_id', this.place_id);
              signInSuccessRequest.append('sign_stuId', this.current_user);
              signInSuccessRequest.append('sign_stuName', this.current_username);
              signInSuccessRequest.append('sign_stuSeat', this.seatNumber);
              signInSuccessRequest.append('sign_courseId', this.course_id);
              signInSuccessRequest.append('sign_courseName', this.course_name);
              let signInSuccessURL = 'http://119.29.225.79:8080/login/SignInPlace';
              this.http.post(signInSuccessURL, signInSuccessRequest).map(res => res.json()).subscribe();
              var time = new Date();
              this.signInTime = time.getTime();
              this.alertMess.alertMessages('签到成功！');
              console.log(time);
              console.log(this.signInTime);
            } else {
              this.alertMess.alertMessages('方圆五百里内似乎没有您的身影...请重新签到！')
            }
          }
        });
    },{enableHighAccuracy: true})
  }

  confirmSeatToSignOut() {
    if (this.seatNumber == '' || this.signInTime == null) {
      console.log(this.seatNumber);
      console.log(this.signInTime);
      this.alertMess.alertMessages("您还未签到！");
    } else {
      var time = new Date();
      this.signTimeInterval = time.getTime() - this.signInTime;
      console.log(time);
      console.log(this.signTimeInterval);

      if(this.signTimeInterval <= 30000) {// 1.5h = 5400000ms
        this.alertMess.alertMessages('这才上课没多久呢！');
      } else {
        let alert = this.alertCtrl.create({
          title: '信息',
          message: '您已上课' + (this.signTimeInterval/60000) + '分钟',
          buttons: [{
            text: '确认', handler: () => {
              this.signOut();
            }
          }, {text: '取消'}]
        });
        alert.present();
      }
    }
  }

  signOut() {
    var geoLocation = new BMap.Geolocation();
    var lng, lat;
    var teach_lng, teach_lat;

    geoLocation.getCurrentPosition( r =>{
      lng = r.point.lng;
      lat = r.point.lat;
      console.log('您的位置：' + lng + ',' + lat);

      //发送请求（place_id）
      let getLocationRequest = new URLSearchParams();
      getLocationRequest.append('place_id', this.place_id);

      let getLocationURL = 'http://119.29.225.79:8080/login/StudentGetPlace';
      this.http.post(getLocationURL, getLocationRequest).map(res => res.json()).subscribe(data => {
        //接收数据（place_id对应的经纬度）
        console.log('teacher location: ' + data);
        teach_lng = data.data[0].place_longitude;
        teach_lat = data.data[0].place_latitude;

        var map = new BMap.Map("allmap");
        var pointStudent = new BMap.Point(lng,lat);  // 创建学生的点坐标
        var pointTeacher = new BMap.Point(teach_lng,teach_lat);  // 创建教师的点坐标，数据从服务器端获取
        var distance = map.getDistance(pointTeacher,pointStudent).toFixed(2);
        console.log('您与老师之间的距离是：' + distance + ' 米。');  //获取两点距离,保留小数点后两位

        if(parseFloat(distance) < 50) {
          console.log('Seat number: ' + this.seatNumber);

          //签退成功，回复数据（place_id + 账号）
          let alert = this.alertCtrl.create({
            title: '信息',
            message: '签退成功！',
            buttons: [{text:'确认', handler:()=>{ this.navCtrl.setRoot(StudentHomePage,{'current_user': this.current_user}); }}]
          });
          alert.present();
        } else {
          this.alertMess.alertMessages('方圆五百里内似乎没有您的身影...请重新签退！')
        }
      });
    },{enableHighAccuracy: true})
  }

  selectSeatNumber(seat: string) {
    this.seatNumber = seat;
  }

  getStudentExistence(seat: string){
    var exist = '0';
    for(var oneStu of this.attendantStudents) {
      if(oneStu[2] == seat) {
        exist = '1';
      }
    }
    return exist;
  }

  seatWarning() {
    this.alertMess.alertMessages("该位置有人！请选择您所在的真实位置进行签到！")
  }

}
