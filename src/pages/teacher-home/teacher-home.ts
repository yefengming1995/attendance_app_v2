import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeacherManagePage} from "../teacher-manage/teacher-manage";
import {TeacherCheckInPage} from "../teacher-check-in/teacher-check-in";
import {Http, URLSearchParams} from "@angular/http";
import {AlertProvider} from "../../providers/alert/alert";

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
  teacher_name = '';
  today = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertProvider, public http: Http) {
    this.current_user = this.navParams.get('current_user');
    console.log(this.current_user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherHomePage');
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
    courseRequest.append('teacher_id',this.current_user);

    let courseURL = 'http://119.29.225.79:8080/login/CourseByTeacherId';
    this.http.post(courseURL,courseRequest).map(res => res.json()).subscribe(data => {
      console.log('data...');
      console.log(JSON.stringify(data));

      for(var course of data.data) {
        this.allCourses.push([course.course_name, course.course_day, course.class_scope, course.place_id1, course.teacher_name, course.course_id]);
      }

      this.teacher_name = this.allCourses[0][4];
      console.log(this.allCourses);
    });
  }

  toTeacherManagePage(){
    this.navCtrl.push(TeacherManagePage,{'current_user': this.current_user});
}
  attendance(course_name: string){
    var place_id = '', course_id = '', course_day = '';

    for(var oneCourse of this.allCourses) {
      if(oneCourse[0] == course_name) {
        course_day = oneCourse[1];
        place_id = oneCourse[3];
        course_id = oneCourse[5];
        console.log(place_id);
        console.log(course_day);
        console.log(course_id);
      }
    }

    if (course_day != this.today) {
      this.alert.alertMessages('不是今天的课程哦');
    } else {
      this.navCtrl.push(TeacherCheckInPage, {
        'current_user': this.current_user,
        'place_id': place_id,
        'course_name': course_name,
        'course_id': course_id
      });
    }
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

}
