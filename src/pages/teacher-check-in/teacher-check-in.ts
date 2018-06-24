import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {TeacherManagePage} from "../teacher-manage/teacher-manage";
import {AlertProvider} from "../../providers/alert/alert";
import {Http,URLSearchParams} from "@angular/http";

/**
 * Generated class for the TeacherCheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var BMap;

@IonicPage()
@Component({
  selector: 'page-teacher-check-in',
  templateUrl: 'teacher-check-in.html',
})
export class TeacherCheckInPage {
  @ViewChild('map') mapElement: ElementRef;

  courseInformation = '';
  current_user = '';
  place_id = '';
  attendantStudents = new Array();
  course_id = '';
  course_name = '';
  rowNumber: number;
  absentStudents = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public alertMess: AlertProvider, public http: Http) {
    this.current_user = this.navParams.get('current_user');
    this.place_id = this.navParams.get('place_id');
    this.course_name = this.navParams.get('course_name');
    this.course_id = this.navParams.get('course_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherCheckInPage');
    this.rowNumber = 6;

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

  getStudentExistence(seat: string){
    var exist = '0';
    for(var oneStu of this.attendantStudents) {
      if(oneStu[2] == seat) {
        exist = '1';
      }
    }
    return exist;
  }

  showStudentInformation(seat: string) {
    for(var oneStu of this.attendantStudents) {
      if (oneStu[2] == seat) {
        this.alertMess.alertMessages('学号： '+ oneStu[0] + '   姓名： ' + oneStu[1]);
      }
    }
  }

  studentNotExist() {
    this.alertMess.alertMessages('该座位没有学生！');
  }

  toTeacherManagePage() {
    this.navCtrl.push(TeacherManagePage);
  }

  attend() {
    this.alertMess.alertMessages('已上课！');

    var geoLocation = new BMap.Geolocation();
    var place_id = this.place_id;
    var lng, lat;

    geoLocation.getCurrentPosition( r=> {
        lng = r.point.lng;
        lat = r.point.lat;
        console.log('您的位置：' + lng + ',' + lat);

        //发送请求（place_id + 经度 + 纬度）
        let setLocationRequest = new URLSearchParams();
        setLocationRequest.append('place_id', place_id);
        setLocationRequest.append('place_longitude', lng);
        setLocationRequest.append('place_latitude', lat);

        let setLocationURL = 'http://119.29.225.79:8080/login/TeacherSetPlace';
        this.http.post(setLocationURL, setLocationRequest).map(res=>res.json()).subscribe();
    },{enableHighAccuracy: true})
  }

   finishClass(){
    this.alertMess.alertMessages('已下课！');
    this.navCtrl.pop();
   }

   relatedInformation() {
     if(this.courseInformation == 'studentList') {
       this.alertMess.alertMessages('功能尚未开发，敬请期待...您可以查看“旷课及请假学生名单”');
     } else if(this.courseInformation == 'absentStudentList') {
       var len = this.absentStudents.length;
       if(len != 0) {
         for(var i = 0; i < len; i ++) {
           this.absentStudents.pop();
         }
       }

       let absentStudentRequest = new URLSearchParams();
       absentStudentRequest.append('course_id', this.course_id);

       let absentStudentURL = 'http://119.29.225.79:8080/login/TeacherCheckLeave';
       this.http.post(absentStudentURL, absentStudentRequest).map(res=>res.json()).subscribe( data => {
         console.log(data.data);
         if(data.data.length == 0) {
           this.alertMess.alertMessages('所有学生都已签到！')
         } else {
           for(var student of data.data) {
             this.absentStudents.push([student.student_id, student.student_name, student.leave_reason]);
           }

           this.alertMess.alertMessages(this.absentStudents);
           this.courseInformation = '';
         }

       });



     } else if(this.courseInformation == 'historyRecord') {
       this.alertMess.alertMessages('功能尚未开发，敬请期待...您可以查看“旷课及请假学生名单”');
     }
   }

}
