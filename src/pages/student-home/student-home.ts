import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import {StudentAttendancePage} from "../student-attendance/student-attendance";
import {StudentManagePage} from "../student-manage/student-manage";
import {Http, URLSearchParams} from "@angular/http";
import {AlertProvider} from "../../providers/alert/alert";

/**
 * Generated class for the StudentHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHomePage {

  current_user = '';
  allCourses = new Array();
  course_towho = '';
  student_name = '';
  today = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertProvider, public http: Http) {
    this.current_user = this.navParams.get('current_user');
    console.log(this.current_user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomePage');
    let day = new Date().getDay();
    switch(day) {
      case 0: this.today = '星期一';
      case 1: this.today = '星期二';
      case 2: this.today = '星期三';
      case 3: this.today = '星期四';
      case 4: this.today = '星期五';
      case 5: this.today = '星期六';
      case 6: this.today = '星期天';
    }
    console.log(this.today);

    //发送请求（账号），接收回复（所有课程信息）
    let courseRequest = new URLSearchParams();
    courseRequest.append('student_id',this.current_user);

    let courseURL = 'http://119.29.225.79:8080/login/CourseByStudentId';
    this.http.post(courseURL,courseRequest).map(res => res.json()).subscribe(data => {
      console.log('data...');
      console.log(JSON.stringify(data));

      for(var course of data.data) {
        this.allCourses.push([course.course_name, course.course_day, course.class_scope, course.place_id1, course.course_towho, course.student_name, course.course_id]);
      }

      this.course_towho = this.allCourses[0][4];
      this.student_name = this.allCourses[0][5];
      console.log(this.allCourses);
    });

  }

  courseExist(day: string, scope: string) {
    var cName = '';
    for(var oneCourse of this.allCourses) {
      if(oneCourse[1] == day && oneCourse[2] == scope) {
        cName = oneCourse[0];
      }
    }
    return cName;
  }

  attendance(course_name: String) {
    var place_id = '', course_id = '', course_day = '';

    for (var oneCourse of this.allCourses) {
      if (oneCourse[0] == course_name) {
        course_day = oneCourse[1];
        place_id = oneCourse[3];
        course_id = oneCourse[6];
        console.log(course_name);
        console.log(course_day);
        console.log(place_id);
        console.log(course_id);
      }
    }

    if (course_day != this.today) {
      this.alert.alertMessages('不是今天的课程不能进行签到哦');
    } else {
      this.navCtrl.setRoot(StudentAttendancePage, {
        'current_user': this.current_user,
        'place_id': place_id,
        'current_username': this.student_name,
        'course_name': course_name,
        'course_id': course_id
      });
    }
  }

  toStudentManage(){
    this.navCtrl.push(StudentManagePage,{'current_user': this.current_user});
  }
}
