import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import {StudentAttendancePage} from "../student-attendance/student-attendance";
import {StudentManagePage} from "../student-manage/student-manage";
import {Http, URLSearchParams} from "@angular/http";

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
  course_name = '';
  course_id = '';
  student_name = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.current_user = this.navParams.get('current_user');
    console.log(this.current_user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomePage');

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
      this.course_name = this.allCourses[0][0];
      this.course_id = this.allCourses[0][6];
      console.log(this.allCourses);
    });

  }

  attendance(place_id: String) {
    this.navCtrl.setRoot(StudentAttendancePage, {'current_user': this.current_user, 'place_id': place_id, 'current_username': this.student_name,
      'course_name': this.course_name, 'course_id': this.course_id});
  }

  toStudentManage(){
    this.navCtrl.push(StudentManagePage,{'current_user': this.current_user});
  }
}
