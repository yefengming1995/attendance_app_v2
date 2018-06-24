import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeacherManagePage} from "../teacher-manage/teacher-manage";
import {TeacherCheckInPage} from "../teacher-check-in/teacher-check-in";
import {Http, URLSearchParams} from "@angular/http";

/**
 * Generated class for the TeacherHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  current_user = '';
  allCourses = new Array();
  course_towho = '';
  student_name = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.current_user = this.navParams.get('current_user');
    console.log(this.current_user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherHomePage');

    //发送请求（账号），接收回复（所有课程信息）
    let courseRequest = new URLSearchParams();
    this.current_user = '170327099';
    courseRequest.append('student_id',this.current_user);

    let courseURL = 'http://119.29.225.79:8080/login/CourseByStudentId';
    this.http.post(courseURL,courseRequest).map(res => res.json()).subscribe(data => {
      console.log('data...');
      console.log(JSON.stringify(data));

      for(var course of data.data) {
        this.allCourses.push([course.course_name, course.course_day, course.class_scope, course.place_id1, course.course_towho, course.student_name]);
      }

      this.course_towho = this.allCourses[0][4];
      this.student_name = this.allCourses[0][5];
      console.log(this.allCourses);
    });
  }

  toTeacherManagePage(){
    this.navCtrl.push(TeacherManagePage);
}
  attendance(place_id: String){
    this.navCtrl.push(TeacherCheckInPage, {'current_user': this.current_user, 'place_id': place_id});
  }

}
